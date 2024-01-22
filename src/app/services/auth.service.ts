import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { shareReplay} from 'rxjs/operators';
import { IdentityUserProfileResponse } from '../models/userResponse';
import { UserLoginRequest } from '../models/userCredentialsLogin';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlLogin = "Identity/login";
  urlRegister = "register";
  private secretKey = 'your-secret-key';
  
  constructor(private http: HttpClient) {
  }
    
  login(user: UserLoginRequest) {
      return this.http.post<IdentityUserProfileResponse>(`${environment.apiUrl}/${this.urlLogin}`, user, { withCredentials: true});
          // this is just the HTTP call, 
          // we still need to handle the reception of the token
          ;
  }
  register(newUser: User) {
    return this.http.post<IdentityUserProfileResponse>(`${environment.apiUrl}/${this.urlRegister}`, newUser)
        // this is just the HTTP call, 
        // we still need to handle the reception of the token
        ;
}
  // getUserIdFromToken(token: string): string | null {
  //   try {
  //     const decodedToken: any = jwt.verify(token, this.secretKey);
  //     return decodedToken.userId || null;
  //   } catch (error) {
  //     console.error('Error decoding token:', error);
  //     return null;
  //   }
  // }
}
