import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmondComponent } from './almond.component';

describe('AlmondComponent', () => {
  let component: AlmondComponent;
  let fixture: ComponentFixture<AlmondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
