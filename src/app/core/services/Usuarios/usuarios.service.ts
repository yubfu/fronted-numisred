import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/interfaces/User.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
    ) { }

  getAllUsuarios(): Observable<any>{
    return this.http.get<User[]>('http://127.0.0.1:8000/api/v1/user/');
  }

  getUser(id: string){
    return this.http.get<User[]>('http://127.0.0.1:8000/api/v1/user/1');
  }



}
