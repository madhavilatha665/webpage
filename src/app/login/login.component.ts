import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import { URLHelper } from '../URLHelper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  submitted = false;
  resp;
  urls = URLHelper.urls;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required],
      

    });
  }
  get f() { 
    return this.login.controls; 
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.login.invalid) {
      return;
    }

    this.authService.loginUser(this.login.value).subscribe(
      (response) => {
        this.resp = response;
        // alert(this.resp.message);
        console.log(this.resp);
        console.log("testing48",this.resp);

        if (this.resp.message == "login successful") {

        
          localStorage.setItem('username', this.resp.username);
          localStorage.setItem('token', this.resp.token);


          this.urls.login = false;
          this.urls.register = false;
          this.urls.logout = true;

          this.router.navigate(['/userhome']);
        }
        else {
          this.login.reset();
          return false;
        }

      }
    )
  }
}


  
  
    

