import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coleccion } from 'src/app/core/interfaces/Coleccion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ColeccionService {

  constructor(
    private http: HttpClient
  ) { }

  getAllColeccion(): Observable<any>{
    return this.http.get<Coleccion[]>('http://127.0.0.1:8000/api/v1/coleccion/');
  }

  getColeccion(id: string){
    return this.http.get<Coleccion[]>('http://127.0.0.1:8000/api/v1/coleccion/');
  }

}
