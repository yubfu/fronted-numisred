import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pieza } from 'src/app/core/interfaces/Pieza.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PiezaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPiezas(): Observable<any>{
    return this.http.get<Pieza[]>('http://127.0.0.1:8000/api/v1/pieza/');
  }

  getUser(id: string){
    return this.http.get<Pieza[]>('http://127.0.0.1:8000/api/v1/pieza/1');
  }

}
