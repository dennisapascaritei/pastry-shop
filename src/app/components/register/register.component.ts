import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  form!: FormGroup;
  newUser!: User;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService){

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
      firstName: "",
      lastName: "",
      role: "",
      phone: "",
      county: "",
      city: "",
      address: "",
      postCode: "",
    });
  }


  submit(): void {
    console.log(this.form.getRawValue());
    this.authService.register(this.newUser)
    .subscribe(res => {
      console.log(res)
    })
    }
}
