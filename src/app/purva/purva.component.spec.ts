import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurvaComponent } from './purva.component';

describe('PurvaComponent', () => {
  let component: PurvaComponent;
  let fixture: ComponentFixture<PurvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
