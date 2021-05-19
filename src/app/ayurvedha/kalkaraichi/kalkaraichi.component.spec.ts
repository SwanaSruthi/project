import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalkaraichiComponent } from './kalkaraichi.component';

describe('KalkaraichiComponent', () => {
  let component: KalkaraichiComponent;
  let fixture: ComponentFixture<KalkaraichiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalkaraichiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalkaraichiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
