import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakkaraiComponent } from './sakkarai.component';

describe('SakkaraiComponent', () => {
  let component: SakkaraiComponent;
  let fixture: ComponentFixture<SakkaraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SakkaraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SakkaraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
