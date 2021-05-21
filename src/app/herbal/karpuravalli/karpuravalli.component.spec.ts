import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarpuravalliComponent } from './karpuravalli.component';

describe('KarpuravalliComponent', () => {
  let component: KarpuravalliComponent;
  let fixture: ComponentFixture<KarpuravalliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarpuravalliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarpuravalliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
