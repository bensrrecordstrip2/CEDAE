import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMedicoComponent } from './sidebar-medico.component';

describe('SidebarMedicoComponent', () => {
  let component: SidebarMedicoComponent;
  let fixture: ComponentFixture<SidebarMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
