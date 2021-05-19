import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashewnutComponent } from './cashewnut.component';

describe('CashewnutComponent', () => {
  let component: CashewnutComponent;
  let fixture: ComponentFixture<CashewnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashewnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashewnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
