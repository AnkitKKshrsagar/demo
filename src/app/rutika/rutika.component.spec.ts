import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutikaComponent } from './rutika.component';

describe('RutikaComponent', () => {
  let component: RutikaComponent;
  let fixture: ComponentFixture<RutikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
