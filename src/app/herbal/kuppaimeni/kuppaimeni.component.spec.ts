import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuppaimeniComponent } from './kuppaimeni.component';

describe('KuppaimeniComponent', () => {
  let component: KuppaimeniComponent;
  let fixture: ComponentFixture<KuppaimeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuppaimeniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuppaimeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
