/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SiComponent } from './si.component';

describe('SiComponent', () => {
  let component: SiComponent;
  let fixture: ComponentFixture<SiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
