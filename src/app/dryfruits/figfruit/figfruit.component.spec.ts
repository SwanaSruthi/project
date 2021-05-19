import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigfruitComponent } from './figfruit.component';

describe('FigfruitComponent', () => {
  let component: FigfruitComponent;
  let fixture: ComponentFixture<FigfruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigfruitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigfruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
