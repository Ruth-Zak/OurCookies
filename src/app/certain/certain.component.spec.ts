import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertainComponent } from './certain.component';

describe('CertainComponent', () => {
  let component: CertainComponent;
  let fixture: ComponentFixture<CertainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
