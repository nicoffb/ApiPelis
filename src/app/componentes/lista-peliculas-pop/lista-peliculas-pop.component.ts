import { Component, OnInit } from '@angular/core';
import { PeliculasPService } from 'src/app/servicios/peliculas-p.service';
import { PeliculasPop } from 'src/app/interfaces/peliculas-p.interface';

@Component({
  selector: 'app-lista-peliculas-pop',
  templateUrl: './lista-peliculas-pop.component.html',
  styleUrls: ['./lista-peliculas-pop.component.css']
})
export class ListaPeliculasPopComponent implements OnInit {

  listaPeliculasPop : PeliculasPop[] = [];

  constructor(private peliculasPService : PeliculasPService) { }

  ngOnInit(): void {

    this.peliculasPService.getPeliculasPop().subscribe(res => {
      this.listaPeliculasPop = res.results;
    })

  }


  getImagenPeliculasPop (peliculasPop : PeliculasPop){
    return `https://image.tmdb.org/t/p/w500/${peliculasPop.poster_path}`;

  }

}
