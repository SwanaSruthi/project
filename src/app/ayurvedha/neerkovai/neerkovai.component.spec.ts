import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeerkovaiComponent } from './neerkovai.component';

describe('NeerkovaiComponent', () => {
  let component: NeerkovaiComponent;
  let fixture: ComponentFixture<NeerkovaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeerkovaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeerkovaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
