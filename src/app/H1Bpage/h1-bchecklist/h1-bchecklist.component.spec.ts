import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1BchecklistComponent } from './h1-bchecklist.component';

describe('H1BchecklistComponent', () => {
  let component: H1BchecklistComponent;
  let fixture: ComponentFixture<H1BchecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1BchecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1BchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
