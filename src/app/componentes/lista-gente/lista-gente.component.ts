import { Component, OnInit } from '@angular/core';
import { GenteService } from '../../servicios/gente.service';
import { Gente, RespuestaGente } from '../../interfaces/gente';
import { LoginService } from '../../servicios/login.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from '../dialog/dialog/dialog.component';
import { RespuestaActor } from 'src/app/interfaces/actor';


@Component({
  selector: 'app-lista-gente',
  templateUrl: './lista-gente.component.html',
  styleUrls: ['./lista-gente.component.css']
})
export class ListaGenteComponent implements OnInit {

  listaGente: Gente[] = [];
  selectActor : RespuestaActor | undefined;


  constructor(private genteService: GenteService, private loginService:LoginService, private route: ActivatedRoute, private dialog: MatDialog  ) { }

  ngOnInit(): void {
    this.genteService.getGente().subscribe(respuesta => {
      this.listaGente = respuesta.results;
    })


    this.route.queryParams
      .subscribe(params => {
        if (params['approved']=="true"){
          this.loginService.getSesionId(params['request_token']).subscribe(respuesta => {
            localStorage.setItem("clave" , respuesta.session_id)
          })
        }
      })
  }

  getImagenActor (gente : Gente){
    return `https://image.tmdb.org/t/p/w500/${gente.profile_path}`

  }

  login(){
    this.loginService.getRequestToken().subscribe(respuesta => {
      window.location.href = 'https://www.themoviedb.org/authenticate/' + respuesta.request_token + '?redirect_to=http://localhost:4200/';
    })
  }

  logout(){
    
  }


  ///////////////////////////////////////////////////////dialog///////////////////////////
  openDialog(actor: Gente) {
    this.genteService.getPersonaId(actor).subscribe((res) => {
      this.selectActor = res;
      console.log(this.selectActor);
      this.dialog.open(DialogComponent, {
        data:{
          infoGente : this.selectActor
        }
       });
    })
  }

}
