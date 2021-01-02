import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRecepcionistaComponent } from './sidebar-recepcionista.component';

describe('SidebarRecepcionistaComponent', () => {
  let component: SidebarRecepcionistaComponent;
  let fixture: ComponentFixture<SidebarRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
