import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthimathuramComponent } from './athimathuram.component';

describe('AthimathuramComponent', () => {
  let component: AthimathuramComponent;
  let fixture: ComponentFixture<AthimathuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthimathuramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthimathuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
