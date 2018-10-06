import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogparksComponent } from './dogparks.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiMockService } from '../api-mock.service';
import { DogparkDataService } from '../dogpark-data.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

describe('DogparksComponent', () => {
  let component: DogparksComponent;
  let fixture: ComponentFixture<DogparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DogparksComponent],
      providers: [
        DogparkDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.of({
              dogparks: []
            })
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
