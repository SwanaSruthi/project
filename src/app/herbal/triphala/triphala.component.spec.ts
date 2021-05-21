import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriphalaComponent } from './triphala.component';

describe('TriphalaComponent', () => {
  let component: TriphalaComponent;
  let fixture: ComponentFixture<TriphalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriphalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriphalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
