import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JathikaiComponent } from './jathikai.component';

describe('JathikaiComponent', () => {
  let component: JathikaiComponent;
  let fixture: ComponentFixture<JathikaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JathikaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JathikaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
