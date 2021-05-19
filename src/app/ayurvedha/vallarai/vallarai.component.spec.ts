import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VallaraiComponent } from './vallarai.component';

describe('VallaraiComponent', () => {
  let component: VallaraiComponent;
  let fixture: ComponentFixture<VallaraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VallaraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VallaraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
