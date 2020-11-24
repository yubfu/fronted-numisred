import { Component, Input, Output, EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy } from '@angular/core';

import {ColeccionService} from '../core/services/Coleccion/coleccion.service';
import { Coleccion } from 'src/app/core/interfaces/Coleccion.model';
import {PiezaService} from '../core/services/Pieza/pieza.service';
import { Pieza } from 'src/app/core/interfaces/Pieza.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.scss']
})
export class ColeccionComponent implements OnInit {
  @Input() coleccion: Coleccion[];
  @Input() pieza: Pieza[];

  constructor(
    private piezaService: PiezaService,
    private coleccionService: ColeccionService,
  ) {
    this.coleccion = [];
    this.pieza = [];
  }

  ngOnInit(): void {
    this.fetchAllPieza();
    this.fetchAllColeccion();

  }

  fetchAllPieza(){
    return this.piezaService.getAllPiezas().subscribe(pieza => {
     this.pieza = pieza;
     console.log(pieza);
     });
     }
 
  fetchAllColeccion(){
    return this.coleccionService.getAllColeccion().subscribe(coleccion => {
    this.coleccion = coleccion;
    console.log(coleccion);
     });
    }

}
