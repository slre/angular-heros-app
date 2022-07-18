import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heros } from '../interfaces/heros.interface';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor( private _httpClient : HttpClient ) { }

  getHeros(){
    return this._httpClient.get<Heros[]>('http://localhost:3000/heroes');
  }


}
