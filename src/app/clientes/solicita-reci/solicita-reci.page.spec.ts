import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaReciPage } from './solicita-reci.page';

describe('SolicitaReciPage', () => {
  let component: SolicitaReciPage;
  let fixture: ComponentFixture<SolicitaReciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitaReciPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaReciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
