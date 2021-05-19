import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KadukkaiComponent } from './kadukkai.component';

describe('KadukkaiComponent', () => {
  let component: KadukkaiComponent;
  let fixture: ComponentFixture<KadukkaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KadukkaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KadukkaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
