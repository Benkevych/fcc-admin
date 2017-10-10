/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StuffsComponent } from './stuffs.component';

describe('StuffsComponent', () => {
  let component: StuffsComponent;
  let fixture: ComponentFixture<StuffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
