import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchalComponent } from './achal.component';

describe('AchalComponent', () => {
  let component: AchalComponent;
  let fixture: ComponentFixture<AchalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
