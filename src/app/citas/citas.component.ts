import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})

export class CitasComponent implements OnInit {

  constructor() { }
  persons: any = [
    {
      Id: 0,
      Nombre: 'Ivan',
      citas: '4:30-5:30pm',
      telefono: '01-275587954',
      correo:  'emmawatson@gmail.com',
      medico: 'José de Jesús',
    },
    {
      Id: 1,
      Nombre: 'María',
      citas: 'Cancelada',
      telefono: '01-800421892',
      correo: 'seguroselaguila@gmail.com',
      medico: 'José de Jesús',
    },
    {
      Id: 2,
      Nombre: 'José María Morelos y pavón',
      citas: '7:30-8:30pm',
      telefono: '01-600547895',
      correo: 'holamundo@gmail.com',
      medico: 'José de Jesús',
    },
  ];
  columns: any = [
  {
      column: 'Id'
  },
  {
      column: 'Nombre'
  },
  {
      column: 'Hora de la cita'
  },
  {
      column: 'Teléfono'
  },
  {
      column: 'correo'
  },
  {
      column: 'Médico'
  },

];

  ngOnInit(): void {
  }
}
