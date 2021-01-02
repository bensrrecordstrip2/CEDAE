import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  constructor() { }
    persons: any = [
      {
        Id: 0,
        Nombre: 'Ivan',
        sexo: 'M',
        citas: 'Ninguna',
      },
      {
        Id: 1,
        Nombre: 'María',
        sexo: 'M',
        citas: '12:30pm'
      },
      {
        Id: 2,
        Nombre: 'José María Morelos y pavón',
        sexo : 'H',
        citas: '4:30pm',
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
    {
        column: 'Citas'
    },
    {
        column: 'Teléfono'
    },

];

  ngOnInit(): void {
  }
}
