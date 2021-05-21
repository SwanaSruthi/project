import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabasuramComponent } from './kabasuram.component';

describe('KabasuramComponent', () => {
  let component: KabasuramComponent;
  let fixture: ComponentFixture<KabasuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabasuramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KabasuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
