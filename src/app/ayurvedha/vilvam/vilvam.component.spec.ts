import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilvamComponent } from './vilvam.component';

describe('VilvamComponent', () => {
  let component: VilvamComponent;
  let fixture: ComponentFixture<VilvamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilvamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VilvamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
