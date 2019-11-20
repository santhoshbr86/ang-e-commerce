import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Location } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'This is not Auth App';
  toggleNav:boolean = false;
  constructor(private router: Router,
    private authService: AuthService,
    private route:ActivatedRoute,
    private location:Location
    ){}
  ngOnInit(){ 
    // //console.log(this.route.snapshot.url);
    // console.log(this.router);
  }
  
  
 
}
