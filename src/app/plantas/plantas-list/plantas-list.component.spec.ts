/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { PlantasListComponent } from './plantas-list.component';
import { Planta } from '../planta';
import faker from '@faker-js/faker';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;

    component.plantas.push(
      new Planta (
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    );

    component.plantas.push(
      new Planta (
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    );

    component.plantas.push(
      new Planta (
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    );


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Valida un cabezote con una fila', () => {
    const cab = fixture.debugElement.query(By.css('table'));
    const filaCab = cab.query(By.css('thead')).queryAll(By.css('tr'));
    expect(filaCab.length).toEqual(1);
  });

  it('Valida el cuerpo con tres filas', () => {
    const cuerpo = fixture.debugElement.query(By.css('table'));
    const filaCuerpo = cuerpo.query(By.css('tbody')).queryAll(By.css('tr'));
    expect(filaCuerpo.length).toEqual(3);
  });





});
