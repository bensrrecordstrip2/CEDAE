import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent implements OnInit {
  agregarMedicamento = false;

  constructor() { }

  ngOnInit(): void {
  }
  Agregar(): void {
    this.agregarMedicamento = !this.agregarMedicamento;
  }
}
