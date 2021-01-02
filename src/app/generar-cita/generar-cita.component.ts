import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-generar-cita',
  templateUrl: './generar-cita.component.html',
  styleUrls: ['./generar-cita.component.css']
})
export class GenerarCitaComponent implements OnInit {

  mytime: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }
}
