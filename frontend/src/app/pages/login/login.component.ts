import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  isLoading = false;
  storedUsername = environment.username;
  storedPassword = environment.password;

  constructor(
    private nzMessageService: NzMessageService,
    private _router: Router
  ) { 

  }

  submitForm() {
    this.isLoading = true;
    console.log(this.username, this.storedUsername);
    console.log(this.password, this.storedPassword);
    if(this.username == this.storedUsername && this.password == this.storedPassword) {
      // set token in local storage
      this.nzMessageService.success("LOGIN SUCCESS");
      this.isLoading = false;
      setTimeout(() => 
        this._router.navigate(["/home"])
      , 300);
    } else {
      this.isLoading = false;
      this.nzMessageService.error("ERROR FOR LOGIN");
      return;
    }
  }


  ngOnInit(): void {
  }

}
