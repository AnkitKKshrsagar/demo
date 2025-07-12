import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonaliComponent } from './monali.component';

describe('MonaliComponent', () => {
  let component: MonaliComponent;
  let fixture: ComponentFixture<MonaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonaliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
