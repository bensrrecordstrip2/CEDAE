import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorExpedienteComponent } from './generador-expediente.component';

describe('GeneradorExpedienteComponent', () => {
  let component: GeneradorExpedienteComponent;
  let fixture: ComponentFixture<GeneradorExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneradorExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
