import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNavBarComponent } from './button-nav-bar.component';

describe('ButtonNavBarComponent', () => {
  let component: ButtonNavBarComponent;
  let fixture: ComponentFixture<ButtonNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
