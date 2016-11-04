/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PbComponent } from './pb.component';

describe('PbComponent', () => {
  let component: PbComponent;
  let fixture: ComponentFixture<PbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
