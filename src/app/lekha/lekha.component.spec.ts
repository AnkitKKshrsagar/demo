import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekhaComponent } from './lekha.component';

describe('LekhaComponent', () => {
  let component: LekhaComponent;
  let fixture: ComponentFixture<LekhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LekhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LekhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
