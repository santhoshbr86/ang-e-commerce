import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { UsersService} from '../services/users.service';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { ActivatedRoute, Router } from '@angular/router';
import {SocialUsers} from '../Models/social-users'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: SocialUser;
  private returnUrl: string;
  @Output() loggedIn = new EventEmitter<any>();
  constructor(
    private userservice:UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.SaveUser(user);
     });
  }
  SaveUser(user:SocialUsers){
      this.userservice.postUser(user).subscribe(res => {
          localStorage.setItem('loggedInUser', JSON.stringify(res))
          this.loggedIn.emit(res);
          this.router.navigate([this.returnUrl]);
        }); 
  }
}
