import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedimensionalButtonComponent } from './threedimensional-button.component';

describe('ThreedimensionalButtonComponent', () => {
  let component: ThreedimensionalButtonComponent;
  let fixture: ComponentFixture<ThreedimensionalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreedimensionalButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreedimensionalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
