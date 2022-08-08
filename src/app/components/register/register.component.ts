import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
 
  constructor(private authService: AuthService) { }
 
  ngOnInit(): void {
  }
 
  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        alert(data.message);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // Redirect to login
        setTimeout(function() {
          window.location.href = "login";
        }, 5000);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  
}
