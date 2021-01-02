import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-sidebar-medico',
  templateUrl: './sidebar-medico.component.html',
  styleUrls: ['./sidebar-medico.component.css']
})
export class SidebarMedicoComponent implements OnInit {
  showValue=true;
  constructor() { }

  ngOnInit(): void {
  }
  Ocultar():void{
    this.showValue = !this.showValue;
  }
}
