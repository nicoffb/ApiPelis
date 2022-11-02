import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gente, GenteData } from 'src/app/interfaces/gente';
import { GenteService } from 'src/app/servicios/gente.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: GenteData , public servicioGente : GenteService) {

  }
  ngOnInit(): void {
  }

}
