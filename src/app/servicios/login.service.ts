import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaLogin, RespuestaSesionID } from '../interfaces/login';

const API_BASE_URL = 'https://api.themoviedb.org/3/authentication/token/new?api_key=450804f0ac576e0fb2014ac91b706571';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
   }

   public getRequestToken(): Observable<RespuestaLogin>{
    return this.http.get<RespuestaLogin>(`${API_BASE_URL}`);
  }

  public getSesionId(requestToken: String) : Observable<RespuestaSesionID>{
    return this.http.post<RespuestaSesionID>('https://api.themoviedb.org/3/authentication/session/new?api_key=450804f0ac576e0fb2014ac91b706571', {"request_token" : requestToken})
  }

}
