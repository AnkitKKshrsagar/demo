import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamikaComponent } from './anamika.component';

describe('AnamikaComponent', () => {
  let component: AnamikaComponent;
  let fixture: ComponentFixture<AnamikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnamikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnamikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
