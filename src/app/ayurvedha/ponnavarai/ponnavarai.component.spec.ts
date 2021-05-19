import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonnavaraiComponent } from './ponnavarai.component';

describe('PonnavaraiComponent', () => {
  let component: PonnavaraiComponent;
  let fixture: ComponentFixture<PonnavaraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonnavaraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonnavaraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
