import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenteaComponent } from './greentea.component';

describe('GreenteaComponent', () => {
  let component: GreenteaComponent;
  let fixture: ComponentFixture<GreenteaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenteaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
