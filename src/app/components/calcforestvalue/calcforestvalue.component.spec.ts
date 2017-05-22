import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcforestvalueComponent } from './calcforestvalue.component';

describe('CalcforestvalueComponent', () => {
  let component: CalcforestvalueComponent;
  let fixture: ComponentFixture<CalcforestvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcforestvalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcforestvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
