import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidhiComponent } from './nidhi.component';

describe('NidhiComponent', () => {
  let component: NidhiComponent;
  let fixture: ComponentFixture<NidhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NidhiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NidhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
