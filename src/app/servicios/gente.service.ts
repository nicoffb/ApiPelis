import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gente, RespuestaGente } from '../interfaces/gente';
import { environment } from 'src/environments/environment';
import { RespuestaActor } from '../interfaces/actor';

@Injectable({
  providedIn: 'root'
})


export class GenteService {

  constructor(private http: HttpClient){}

    public getGente(): Observable<RespuestaGente>{
      return this.http.get<RespuestaGente>(`${environment.apiBaseUrl}/person/popular?api_key=450804f0ac576e0fb2014ac91b706571&language=en-US&page=1`);
    }

    public getPersonaId(actor : Gente): Observable<RespuestaActor>{
      return  this.http.get<RespuestaActor>(`${environment.apiBaseUrl}+ "/person/" + ${actor.id} + "?api_key=450804f0ac576e0fb2014ac91b706571&language=en-US"`);
    }
  
}