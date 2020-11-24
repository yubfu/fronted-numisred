import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsuariosService} from './services/Usuarios/usuarios.service';
import {CategoriaService} from './services/Categoria/categoria.service';
import {ColeccionService} from './services/Coleccion/coleccion.service';
import {PerfilService} from './services/Perfil/perfil.service';
import {PiezaService} from './services/Pieza/pieza.service';
import {RolService} from './services/Rol/rol.service';
import {TipoService} from './services/Tipo/tipo.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    UsuariosService,
    CategoriaService,
    ColeccionService,
    PerfilService,
    PiezaService,
    RolService,
    TipoService

  ]
})
export class CoreModule { }
