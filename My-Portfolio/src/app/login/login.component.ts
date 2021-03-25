import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string="";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(loginRef:any) {
    //console.log("Event generated");
    console.log(loginRef);
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    if(user1 == "admin" && pass1 == "admin"){
      this.msg="Successfully Login"
      this.router.navigate(["home"]);
    }else {
      this.msg = "login Fail again";
    }
  }
}
