import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShabatComponent } from './shabat.component';

describe('ShabatComponent', () => {
  let component: ShabatComponent;
  let fixture: ComponentFixture<ShabatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShabatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
