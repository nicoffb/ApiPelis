import { Component, OnInit } from '@angular/core';
import { GenteService } from '../servicios/gente.service';
import { Gente } from '../interfaces/gente';

@Component({
  selector: 'app-lista-gente',
  templateUrl: './lista-gente.component.html',
  styleUrls: ['./lista-gente.component.css']
})
export class ListaGenteComponent implements OnInit {

  listaGente: Gente[] = [];


  constructor(private genteService: GenteService) { }

  ngOnInit(): void {
    this.genteService.getGente().subscribe(respuesta => {
      this.listaGente = respuesta.results;
    })
  }

  getImagenActor (gente : Gente){
    return `https://image.tmdb.org/t/p/w500/${gente.profile_path}`

  }

}
