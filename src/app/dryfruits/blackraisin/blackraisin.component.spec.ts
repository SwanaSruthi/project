import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackraisinComponent } from './blackraisin.component';

describe('BlackraisinComponent', () => {
  let component: BlackraisinComponent;
  let fixture: ComponentFixture<BlackraisinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackraisinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackraisinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
