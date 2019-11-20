import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Location } from "@angular/common";
import { Router, NavigationEnd, RouterState } from '@angular/router';
import {filter} from 'rxjs/operators';
import { SocialUsers } from '../Models/social-users';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  toggleNav:boolean = false;
  showDropdown:boolean = false;
  user = new SocialUsers();
  constructor(private authService: AuthService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
      // this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      //   .subscribe(event => {
      //     if(location.pathname !== '/'){
      //         this.toggleNav = true;
      //       }else{
      //         this.toggleNav = false;
      //       }
      //    });
        if(this.user){
          this.toggleNav = true;
        }
   //  this.toggleNav=true;
  }
  OnloggedIn(e){
      this.user = e;
      this.toggleNav = true;
  }
  logout(){
    this.authService.signOut().then(data =>{
       localStorage.setItem('loggedInUser', null);
       this.toggleNav = !this.toggleNav;
      //  this.router.navigate(['/']);
    });
  }
}
