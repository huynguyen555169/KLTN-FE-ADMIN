import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication/authentication';
import { UserDetailService } from 'src/app/core/services/api/user-detail-service/userdetail.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { dataNav } from './mockData';


@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dataNav = dataNav;
  width = 400;
  isLogin = true;
  isShowHeader = false;
  constructor(public router: Router, private route: ActivatedRoute, private authService: AuthenticationService, private userDetailService: UserDetailService,) {
    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      if (event.url === '/logout') {
        // this.authService.logout();
        localStorage.removeItem('currentUser');
        this.router.navigate([`/login`]);
      }
    });
  }


  ngOnInit(): void {
    this.authService.currentUser.subscribe(res => {
      (this.isLogin = !res);
      const requestModel = new HttpRequestModel();
      requestModel.params = {};
      this.userDetailService.getUserAndPermission(requestModel).subscribe(user => {
        this.dataNav.userInfo.avatar = user.avatar;
        this.dataNav.userInfo.fullName = user.name;
        if (user.role === 'admin') {
          this.dataNav.urls[1].children.push(
            {
              id: '1',
              name: 'Customer', // tên hiển thị trên sidebar
              url: 'customer', // url để navigate
              icon: 'face', // icon hiển thị (material icon)
            }, {
            id: '2',
            name: 'Staff', // tên hiển thị trên sidebar
            url: 'staff', // url để navigate
            icon: 'face', // icon hiển thị (material icon)
          }, {
            id: 'e',
            name: 'Permission', // tên hiển thị trên sidebar
            url: 'permission', // url để navigate
            icon: 'face', // icon hiển thị (material icon)
          }
          );
        }
      });
    }
    );
  }

}
