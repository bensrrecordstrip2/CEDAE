import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-expedientes',
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css']
})
export class ExpedientesComponent implements OnInit {

  constructor() { }

  expedientes: any = [
    {
      Id: 0,
      Nombre: 'Ivan',
      sexo: 'M',
    },
    {
      Id: 1,
      Nombre: 'María',
      sexo: 'M',
     
    },
    {
      Id: 2,
      Nombre: 'José María Morelos y pavón',
      sexo : 'H',
      
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
      column: 'Sexo'
  },
];

  ngOnInit(): void {
  }
}

