import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiniComponent } from './nini.component';

describe('NiniComponent', () => {
  let component: NiniComponent;
  let fixture: ComponentFixture<NiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
