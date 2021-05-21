import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NilavembuComponent } from './nilavembu.component';

describe('NilavembuComponent', () => {
  let component: NilavembuComponent;
  let fixture: ComponentFixture<NilavembuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NilavembuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NilavembuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
