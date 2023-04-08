import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../Services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos:any[]=[]

  constructor(public servicio:SpotifyService) { 

    this.servicio.buscarCanciones()
    .subscribe(respuesta=>{
      console.log(respuesta)
      this.datos=respuesta.tracks
    })

  }

  ngOnInit(): void {
  }

}
