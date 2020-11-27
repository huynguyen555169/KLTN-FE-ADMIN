import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-discussion-attach1',
  templateUrl: './c-discussion-attach1.component.html',
  styleUrls: ['./c-discussion-attach1.component.scss']
})
export class CDiscussionAttach1Component implements OnInit {
  files: any[] = [];
  url = [];

  @Output() filesAttach = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files)
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      this.files.push(item);
      var reader = new FileReader();

      reader.readAsDataURL(item); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url.push(event.target.result);
      }
    }
    this.filesAttach.emit(this.files);

  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.url.splice(index, 1)
    this.files.splice(index, 1);
    this.filesAttach.emit(this.files);
  }

  /**
   * Simulate the upload process
   */


  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
