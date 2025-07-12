import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RashiComponent } from './rashi.component';

describe('RashiComponent', () => {
  let component: RashiComponent;
  let fixture: ComponentFixture<RashiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RashiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RashiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
