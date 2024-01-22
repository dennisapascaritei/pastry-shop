import { Component, OnInit } from '@angular/core';
import { AuthEmitters } from '../../emitters/authEmitter';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css'
})
export class TaskbarComponent implements OnInit{
addToCart() {
throw new Error('Method not implemented.');
}

  isAuthenticated = false;

  ngOnInit(): void {
    AuthEmitters.authEmitter.subscribe((auth: boolean) => {
      this.isAuthenticated = auth;
    })
  }



  logOut(): void{
    localStorage.removeItem('accessToken');
    this.isAuthenticated = false;
  }

}
