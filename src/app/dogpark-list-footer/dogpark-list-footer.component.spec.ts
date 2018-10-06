/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DogparkListFooterComponent } from './dogpark-list-footer.component';
import { Dogpark } from '../dogpark';

describe('DogparkListFooterComponent', () => {
  let component: DogparkListFooterComponent;
  let fixture: ComponentFixture<DogparkListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogparkListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogparkListFooterComponent);
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
