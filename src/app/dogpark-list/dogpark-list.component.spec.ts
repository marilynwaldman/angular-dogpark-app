/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { DogparkListComponent } from './dogpark-list.component';
import { Dogpark } from '../dogpark';

describe('DogparkListComponent', () => {
  let component: DogparkListComponent;
  let fixture: ComponentFixture<DogparkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogparkListComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogparkListComponent);
    component = fixture.componentInstance;
    component.dogparks = [
     new Dogpark({ id: 1, title: 'Test', complete: false })
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
