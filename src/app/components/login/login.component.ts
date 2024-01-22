import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserLoginRequest } from '../../models/userCredentialsLogin';
import { IdentityUserProfileResponse } from '../../models/userResponse';
import { Router } from '@angular/router';
import { AuthEmitters } from '../../emitters/authEmitter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  invalidLogin: boolean | undefined;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {}


  login(form: NgForm): void {
    var user : UserLoginRequest = {username: form.value.username, password: form.value.password};

    if (user.username && user.password) {
        this.authService.login(user)
            .subscribe(
                (res: IdentityUserProfileResponse) => {
                    localStorage.setItem("accessToken", res.token);
                    this.invalidLogin = false;
                    AuthEmitters.authEmitter.emit(true);
                    this.router.navigate(["/"])
                }, err => {
                  this.invalidLogin = true;
                }
            );
    }
  }
}
