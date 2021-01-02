import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-generador-expediente',
  templateUrl: './generador-expediente.component.html',
  styleUrls: ['./generador-expediente.component.css']
})
export class GeneradorExpedienteComponent implements OnInit {
  DatosValue = false;
  HistorialValue = false;
  PronosticoValue = false;

  constructor() { }

  ngOnInit(): void {
  }
 Guardar(): void{
   alert('Guardaste el expediente con exito');
 }
 Borrar(): void{
   alert('¿Seguro que quieres borrar el expediente?');
   alert('Se borró el expediente :c');
 }
}
