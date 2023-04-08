import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  uri:string="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US"

  token:string="Bearer BQBG48hGRJCU8jAYAopsCVOzzIhjYIWGjW7fpdTo-G5iCoqqD3454Z4P03IBXMq1kR8oBgwPL9VwxF_6WXHyj8e6LaHdhFGasWobRxvJlFn-NtkIRxHB"

  constructor(public servicio:HttpClient) {
    console.log("arrancamos el servicio")
  }

  buscarCanciones():Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({
        Authorization:this.token
      })
    }
    return this.servicio.get(this.uri,httpOptions)
  }

}
