import { Component, OnInit } from '@angular/core';
import { UsersService} from '../services/users.service';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users:any=[];
  constructor(private userservice:UsersService, private p: ProductService) { }

  ngOnInit() {
    // let d = {name:'name', description:'p1 des', cost:10, availableDate:new Date('20/10/2019')};
    // this.p.postProduct(d).subscribe(r =>{
    //     console.log(r);
    // });
    this.userservice.getUsers().subscribe((res) =>{
      this.users =res;
    });
  }
  
 
}
