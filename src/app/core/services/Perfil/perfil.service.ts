import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from 'src/app/core/interfaces/Perfil.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPerfil(): Observable<any>{
    return this.http.get<Perfil[]>('http://127.0.0.1:8000/api/v1/perfil/');
  }

  getPerfil(id: string){
    return this.http.get<Perfil[]>('http://127.0.0.1:8000/api/v1/perfil/1');
  }
}
