import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1BComponent } from './h1-b.component';

describe('H1BComponent', () => {
  let component: H1BComponent;
  let fixture: ComponentFixture<H1BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
