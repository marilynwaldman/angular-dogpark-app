/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DogparkListItemComponent } from './dogpark-list-item.component';
import { Dogpark } from '../dogpark';

describe('DogparkListItemComponent', () => {
  let component: DogparkListItemComponent;
  let fixture: ComponentFixture<DogparkListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogparkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogparkListItemComponent);
    component = fixture.componentInstance;
    component.dogpark = new Dogpark({ id: 1, title: 'Test', complete: false, name: 'dogpark' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
