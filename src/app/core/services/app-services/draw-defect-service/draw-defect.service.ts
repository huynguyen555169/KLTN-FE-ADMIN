import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { DefectModel } from '../../../../pages/view-edit/models';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { take, map } from 'rxjs/operators';

class DefectInServiceModel {
  id: string;
  points: Array<Array<number>>;

  constructor(defect: any) {
    this.id = defect.id;
    this.points = defect.points.map(point => [+point.x, +point.y]);
  }
}
@Injectable()
export class DrawDefectService {
  constructor() {}

  containerWidth: number;
  containerHeight: number;
  selector: string;
  maxPoint: number;
  state;
  isDirty = new BehaviorSubject<boolean>(false);

  // Point array for 1 defect
  points: Array<Array<number>> = [];
  // Array to hold all percent of previous zoom step
  // Support to next zoom

  // For main
  // For drawing array of defect
  defectArray: DefectInServiceModel[] = []; // Array of point
  defectClickEventObservable: Observable<string>;

  // root svg
  svg: any;

  // zoom
  kZoom = 1;
  kZoomPre = 1; // Previous zoom
  zoom = d3.zoom();

  // Flags
  dragged = null;
  selected = this.points[0];

  isMainComp = false;

  // move in line
  enterLineFlag = false;

  // virtual circle show in line on mousemove
  virtualCircle: any;

  // decide to draw circle (ediable)
  isActive = false;

  // drag variables
  startPoint: number[];
  endPoint: number[];
  stopDrawBoundingRectangle = false;
  endDrawBoundingRectangleCallback: any;
  rectObject: { x: number; y: number; w: number; h: number };

  /**
   * Flow: Init variable -> Init for drawing -> First drawing -> Redraw when mouse move
   */

  /**
   * Init all neccessary variables (Init variable) for defect item
   * Init for draw 1 defect (defect item)
   * @param w width of svg
   * @param h height of svg
   * @param idArea identify area that svg will draw in (Unique)
   * @param points Point array
   * @param maxPoint Maximum point can be added in drawing
   */

  init(
    w: number,
    h: number,
    idArea: string,
    points: { x: string; y: string }[],
    state = 'drawing',
    maxPoint: number = 7
  ): void {
    this.containerWidth = w;
    this.containerHeight = h;
    this.selector = idArea;
    this.maxPoint = maxPoint;
    this.points = points.map(point => [+point.x, +point.y]);
    this.isMainComp = false;
    this.state = state;

    this.initDrawing();
  }

  /**
   * Init all neccessary variables (Init variable) for main compontent
   * Init for draw 1 defect (defect item)
   * @param w width of svg
   * @param h height of svg
   * @param idArea identify area that svg will draw in (Unique)
   * @param points Point array
   * @param maxPoint Maximum point can be added in drawing
   */
  m_init(w: number, h: number, idArea: string, defects: DefectModel[]): void {
    this.containerWidth = w;
    this.containerHeight = h;
    this.selector = idArea;
    this.defectArray = defects.map(defect => new DefectInServiceModel(defect));
    this.isMainComp = true;

    this.m_initDrawing();
  }

  updateZoom(zoom: number): void {
    if (this.kZoom <= 0) {
      return;
    }

    this.kZoomPre = this.kZoom;
    this.kZoom = zoom;

    // Zoom on layer with kZoom
    this.svg
      .attr('width', this.containerWidth * this.kZoom)
      .attr('height', this.containerHeight * this.kZoom);
    this.svg
      .select('rect.rect-draw-layer')
      .attr('width', this.containerWidth * this.kZoom)
      .attr('height', this.containerHeight * this.kZoom);
    // Update point coordinates
    // x: new X = (X in percent of width) * (Expanded or Shrink between this zoom and previous zoom)
    this.points = this.points.map((point, index) => {
      point[0] = (this.kZoom * point[0]) / this.kZoomPre;
      point[1] = (this.kZoom * point[1]) / this.kZoomPre;
      return point;
    });
    this.drawDefectItem();
  }

  m_updateZoom(zoom: number): void {
    if (this.kZoom <= 0) {
      return;
    }

    this.kZoomPre = this.kZoom;
    this.kZoom = zoom;

    // Zoom on layer with kZoom
    this.svg
      .attr('width', this.containerWidth * this.kZoom)
      .attr('height', this.containerHeight * this.kZoom);
    this.svg
      .select('rect.rect-draw-layer')
      .attr('width', this.containerWidth * this.kZoom)
      .attr('height', this.containerHeight * this.kZoom);
    // Update point coordinates
    // x: new X = (X in percent of width) * (Expanded or Shrink between this zoom and previous zoom)
    this.defectArray.forEach(defect => {
      defect.points = defect.points.map((point, index) => {
        point[0] = (this.kZoom * point[0]) / this.kZoomPre;
        point[1] = (this.kZoom * point[1]) / this.kZoomPre;
        return point;
      });
    });
    this.drawDefectArray();
  }

  /**
   * Init drawing variables (Init for drawing) - defect item
   */
  initDrawing(): void {
    // Init global svg
    this.svg = d3
      .select(`#${this.selector}`)
      .append('svg')
      .attr('id', 'root-svg')
      .attr('width', this.containerWidth)
      .attr('height', this.containerHeight)
      .style('user-select', 'none')
      .on('mousemove', this.mousemove.bind(this))
      .on('mouseup', this.mouseup.bind(this)); // catch mouse move event here

    // Append a rect for drawing
    this.svg
      .append('rect')
      .attr('width', this.containerWidth)
      .attr('height', this.containerHeight)
      .attr('class', 'rect-draw-layer')
      .on('contextmenu', this.addPoint.bind(this))
      .on('click', this.drawDone.bind(this));

    this.virtualCircle = this.svg
      .append('circle')
      .attr('id', 'virtual-circle')
      .style('fill', '#ff8585')
      .attr('r', 0);

    if (this.points.length > 0) {
      this.selected = this.points[this.points.length - 1];
    }
    this.drawDefectItem();
    this.drawDone();

    this.svg.node().focus();
  }

  /**
   * Init drawing variables (Init for drawing) - array defect
   */
  m_initDrawing(): void {
    // Init global svg
    this.svg = d3
      .select(`#${this.selector}`)
      .append('svg')
      .attr('id', 'root-svg')
      .attr('width', this.containerWidth)
      .attr('height', this.containerHeight)
      .style('user-select', 'none'); // catch mouse move event here

    // Append a rect for drawing
    this.svg
      .append('rect')
      .attr('width', this.containerWidth)
      .attr('height', this.containerHeight)
      .attr('class', 'rect-draw-layer')
      .call(
        d3
          .drag()
          .on('start', this.startDragBoundingDefect.bind(this))
          .on('drag', this.onDragBoundingDefect.bind(this))
          .on('end', this.endDragBoundingDefect.bind(this))
      );

    this.drawDefectArray();

    this.svg.node().focus();

    // Observable to get id of clicked defect in main
    this.defectClickEventObservable = fromEvent(
      document.querySelectorAll('path[id*="main-line"]'),
      'click'
    ).pipe(map((event: any) => event.target.id.split('main-line-')[1]));
  }

  drawDefectItem(): void {
    if (this.state === 'done') {
      this.points.push(this.points[0]);
    }

    let pointGroup = [];
    if (this.points.length > 1) {
      pointGroup = Array.from({
        length: this.points.length - 1
      }).map((_, i) => [this.points[i], this.points[i + 1]]);
    }
    const lines = this.svg.selectAll('line').data(pointGroup);
    lines.exit().remove();
    lines
      .enter()
      .append('line')
      .attr('x1', d => d[0][0])
      .attr('x2', d => d[1][0])
      .attr('y1', d => d[0][1])
      .attr('y2', d => d[1][1])
      .style('stroke', 'red')
      .style('stroke-width', 2)
      .style('fill', 'none')
      .on('mouseenter', this.mouseEnterInLine.bind(this))
      .on('mousemove', this.mouseMoveInLine.bind(this))
      .on('mouseleave', this.mouseLeaveInLine.bind(this))
      .on('contextmenu', this.addPointInLine.bind(this));

    lines
      .attr('x1', d => d[0][0])
      .attr('x2', d => d[1][0])
      .attr('y1', d => d[0][1])
      .attr('y2', d => d[1][1]);

    if (!this.isMainComp && this.isActive) {
      const circle = this.svg
        .selectAll('circle:not(#virtual-circle)')
        .data(this.points);
      circle.exit().remove();
      circle
        .enter()
        .append('circle')
        .classed('selected', d => d === this.selected)
        .attr('r', 4)
        .attr('cx', d => d[0])
        .attr('cy', d => d[1])
        .on('mouseenter', this.mouseEnterCircle.bind(this))
        .on('mouseleave', this.mouseLeaveCircle.bind(this))
        .on('mousedown', this.mousedownCircle.bind(this));

      circle
        .classed('selected', d => d === this.selected)
        .attr('cx', d => d[0])
        .attr('cy', d => d[1]);
    } else {
      this.svg.selectAll('circle:not(#virtual-circle)').remove();
    }

    if (this.state === 'done') {
      this.points.splice(this.points.length - 1, 1);
    }
  }

  drawDefectArray(): void {
    const paths = this.svg.selectAll('path').data(this.defectArray);
    paths
      .enter()
      .append('path')
      .attr('id', (d: any) => `main-line-${d.id}`)
      .attr('class', 'main-line-defect');

    paths.exit().remove();

    this.defectArray.forEach(defect => {
      this.drawAnDefect(defect);
    });
  }

  /**
   * Used by drawDefectArray function
   */
  drawAnDefect(defect: DefectInServiceModel): void {
    if (defect.points.length > 2) {
      defect.points.push(defect.points[0]);
    }

    this.svg
      .select(`path#main-line-${defect.id}`)
      .datum(defect.points)
      .attr(
        'd',
        d3
          .line()
          .x(d => d[0])
          .y(d => d[1])
      )
      .style('stroke', 'red')
      .style('stroke-width', 2)
      .style('fill', 'white')
      .style('fill-opacity', '0');
    if (defect.points.length > 2) {
      defect.points.splice(defect.points.length - 1, 1);
    }
  }

  drawActiveDefectInMain(id: string): void {
    d3.selectAll('path.main-line-defect').style('stroke', 'red');
    d3.select(`path#main-line-${id}`).style('stroke', '#f7ff00');
  }

  addPoint(): void {
    event.preventDefault();

    if (this.points.length < this.maxPoint && this.state === 'drawing') {
      this.points.push((this.selected = d3.mouse(this.svg.node())));
      this.drawDefectItem();
      this.dragged = null;
    }

    if (!this.isDirty.value) {
      this.isDirty.next(true);
    }
  }

  addPointInLine(data: any): void {
    event.preventDefault(); // Prevent context menu event

    if (this.points.length < this.maxPoint) {
      // data for line (points array) contain 2 points coordinates
      // => data[0] is first point (point to add after)
      const indexToAddPointAfter = this.points.findIndex(e => e === data[0]);
      if (indexToAddPointAfter === -1) {
        return;
      } else {
        this.points.splice(
          indexToAddPointAfter + 1,
          0,
          (this.selected = this.dragged = d3.mouse(this.svg.node()))
        );

        this.drawDefectItem();
        this.dragged = null;
      }
    }

    if (!this.isDirty.value) {
      this.isDirty.next(true);
    }
  }

  drawDone(): void {
    if (this.points.length > 2) {
      this.state = 'done';
      this.drawDefectItem();
    }
  }

  mouseEnterCircle(): void {
    d3.select(event.target).attr('r', 6);
  }

  mouseLeaveCircle(): void {
    d3.select(event.target).attr('r', 4);
  }

  mousedownCircle(d): void {
    this.selected = d;
    this.dragged = d;
    this.drawDefectItem();
  }

  mousemove(): void {
    if (!this.dragged) {
      return;
    }
    const m = d3.mouse(this.svg.node());
    this.dragged[0] = Math.max(0, Math.min(this.containerWidth, m[0]));
    this.dragged[1] = Math.max(0, Math.min(this.containerHeight, m[1]));
    this.drawDefectItem();

    if (!this.isDirty.value) {
      this.isDirty.next(true);
    }
  }

  mouseup(): void {
    if (!this.dragged) {
      return;
    }
    this.mousemove();
    this.dragged = null;
  }

  deletePoint(): void {
    if (!this.selected) {
      return;
    }

    const i = this.points.indexOf(this.selected);
    this.points = this.points.filter(point => point !== this.selected);
    this.selected = this.points.length ? this.points[i > 0 ? i - 1 : 0] : null;
    if (this.points.length < 3) {
      this.state = 'drawing';
    }
    this.drawDefectItem();

    if (!this.isDirty.value) {
      this.isDirty.next(true);
    }
  }

  undoPoint(): void {
    if (this.points.length) {
      if (this.selected === this.points[this.points.length - 1]) {
        // Reassign selected point if it is last point
        this.selected = this.points[this.points.length - 2];
      }
      this.points.splice(this.points.length - 1, 1);

      if (this.points.length < 3) {
        this.state = 'drawing';
      }
      this.drawDefectItem();

      if (!this.isDirty.value) {
        this.isDirty.next(true);
      }
    }
  }

  mouseEnterInLine(): void {
    this.enterLineFlag = true;
    if (
      !this.dragged &&
      this.state === 'done' &&
      this.isActive &&
      this.points.length < this.maxPoint
    ) {
      d3.select(event.target).style('stroke-width', 4);
    }
  }

  mouseMoveInLine(): void {
    if (
      this.state === 'done' &&
      this.isActive &&
      this.enterLineFlag &&
      this.points.length < this.maxPoint
    ) {
      this.virtualCircle
        .attr('r', 6)
        .attr('cx', d3.mouse(this.svg.node())[0])
        .attr('cy', d3.mouse(this.svg.node())[1]);
    }
  }

  mouseLeaveInLine(): void {
    if (this.state === 'done') {
      this.enterLineFlag = false;
      this.virtualCircle.attr('r', 0);
      d3.select(event.target).style('stroke-width', 2);
    }
  }

  setActive(value: boolean): void {
    this.isActive = value;
    this.drawDefectItem();
  }

  startDragBoundingDefect(): void {
    this.startPoint = d3.mouse(this.svg.node());
    this.endPoint = d3.mouse(this.svg.node());
    if (d3.select('#bouding-rect').empty()) {
      this.svg
        .append('rect')
        .attr('id', 'bouding-rect')
        .style('fill', 'none')
        .style('stroke', '#f7ff00')
        .style('stroke-width', 2)
        .style('stroke-dasharray', '7, 3');
    }
  }

  onDragBoundingDefect(): void {
    if (!this.stopDrawBoundingRectangle) {
      const endPoint = d3.mouse(this.svg.node());
      this.drawBoundingRectangle(endPoint);
    }
  }

  endDragBoundingDefect(): void {
    this.stopDrawBoundingRectangle = true;
    if (this.endDrawBoundingRectangleCallback) {
      this.endDrawBoundingRectangleCallback(this.rectObject);
    }
  }

  drawBoundingRectangle(endPoint: number[]): void {
    const x =
      this.startPoint[0] < endPoint[0] ? this.startPoint[0] : endPoint[0];
    const width = Math.abs(this.startPoint[0] - endPoint[0]);
    const height = (2 * width) / 3;
    const y =
      this.startPoint[1] < endPoint[1]
        ? this.startPoint[1]
        : this.startPoint[1] - height;
    d3.select('#bouding-rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', width)
      .attr('height', height);
    this.rectObject = { x, y, w: width, h: height };
  }

  removeBoundingRectangle(): void {
    d3.select('#bouding-rect').remove();
    this.stopDrawBoundingRectangle = false;
  }

  setEndDrawBoundingCallback(callback: any): void {
    if (callback && {}.toString.call(callback) === '[object Function]') {
      this.endDrawBoundingRectangleCallback = callback;
    }
  }

  resetDirty(): void {
    this.isDirty.next(false);
  }

  getIsDirty(): Observable<boolean> {
    return this.isDirty;
  }

  getDefectClickEventObservable(): Observable<string> {
    return this.defectClickEventObservable;
  }
}
