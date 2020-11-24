import { Component, Input, Output, EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy } from '@angular/core';
import {UsuariosService} from '../core/services/Usuarios/usuarios.service';
import { PerfilService } from '../core/services/Perfil/perfil.service';


import { User } from 'src/app/core/interfaces/User.model';
import { Perfil } from 'src/app/core/interfaces/Perfil.model';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})



export class PerfilComponent implements  OnInit {
  @Output() estudianteClicked: EventEmitter<any> = new EventEmitter();
  @Input() user: User[];
  @Input() perfil: Perfil[];

  constructor(
    private usuariosServices: UsuariosService,
    private perfilService: PerfilService,
    ){
     this.user = [];
     this.perfil = [];
   }

  ngOnInit(): void{
    this.fetchAllUser();
    this.fetchAllPerfil();
   }

   fetchAllUser(){
   return this.usuariosServices.getAllUsuarios().subscribe(user => {
    this.user = user;
    console.log(user);
    });
    }

    fetchAllPerfil(){
      return this.perfilService.getAllPerfil().subscribe(perfil => {
       this.perfil = perfil;
       console.log(perfil);
       });
       }

////////////////////////////////////////////////

   agregarObservacion(): void{
    console.log('Añadir observacion');
    this.estudianteClicked.emit();
    }

    clickEstudiante(id: number): void{
      console.log('user');
      console.log(id);
    }


}
