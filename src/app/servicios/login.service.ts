import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespuestaLogin, RespuestaSesionID } from '../interfaces/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
   }

   public getRequestToken(): Observable<RespuestaLogin>{
    return this.http.get<RespuestaLogin>( `${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`);
  }

  public getSesionId(requestToken: String) : Observable<RespuestaSesionID>{
    return this.http.post<RespuestaSesionID>( `${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`, {"request_token" : requestToken})
  }

}
