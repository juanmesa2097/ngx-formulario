import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormularioComponent } from './ngx-formulario.component';

describe('NgxFormularioComponent', () => {
  let component: NgxFormularioComponent;
  let fixture: ComponentFixture<NgxFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
