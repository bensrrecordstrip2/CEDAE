import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-sidebar-recepcionista',
  templateUrl: './sidebar-recepcionista.component.html',
  styleUrls: ['./sidebar-recepcionista.component.css']
})
export class SidebarRecepcionistaComponent implements OnInit {
  showValue=true;
  constructor() { }

  ngOnInit(): void {
  }
  Ocultar():void{
    this.showValue = !this.showValue;
  }
}
