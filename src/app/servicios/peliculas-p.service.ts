import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeliculasPopResponse } from '../interfaces/peliculas-p.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasPService {

  constructor(private http : HttpClient) { }

  public getPeliculasPop(): Observable<PeliculasPopResponse>{
    return this.http.get<PeliculasPopResponse>(`${environment.apiBaseUrl}/movie/popular?api_key=450804f0ac576e0fb2014ac91b706571&language=en-US&page=1`);
  }
}
