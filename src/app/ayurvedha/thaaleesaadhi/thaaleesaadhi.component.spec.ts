import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaaleesaadhiComponent } from './thaaleesaadhi.component';

describe('ThaaleesaadhiComponent', () => {
  let component: ThaaleesaadhiComponent;
  let fixture: ComponentFixture<ThaaleesaadhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThaaleesaadhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaaleesaadhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
