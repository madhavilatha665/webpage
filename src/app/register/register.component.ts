import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  submitted = false;
  resp;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.register = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobilenumber: ['', [Validators.required, Validators.maxLength(10)]],

    });
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.register.controls; 
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.register.invalid) {
      return;
    }

    this.authService.registerUser(this.register.value).subscribe(
      (response) => {
        this.resp = response;
        // alert(this.resp.message);
        console.log(this.resp);
        if (this.resp.status == true) {
          this.router.navigate(['/login']);
        }
        else {
          alert(this.resp.message);
          // this.register.reset();
          this.register.controls['emailId'].reset()

        }
      }
    )
  }
}

