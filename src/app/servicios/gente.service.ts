import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaGente } from '../interfaces/gente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class GenteService {

  constructor(private http: HttpClient){}

    public getGente(): Observable<RespuestaGente>{
      return this.http.get<RespuestaGente>(`${environment.apiBaseUrl}/person/popular?api_key=450804f0ac576e0fb2014ac91b706571&language=en-US&page=1`);
    }
  
}