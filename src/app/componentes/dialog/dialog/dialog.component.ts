import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RespuestaActor } from 'src/app/interfaces/actor';
import { GenteService } from 'src/app/servicios/gente.service';

export interface GenteData {
  infoGente : RespuestaActor;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: GenteData , public servicioGente : GenteService) {

  }
  ngOnInit(): void {
    console.log(this.data);
  }

}
