import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisinsComponent } from './raisins.component';

describe('RaisinsComponent', () => {
  let component: RaisinsComponent;
  let fixture: ComponentFixture<RaisinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
