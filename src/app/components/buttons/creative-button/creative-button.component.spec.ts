import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeButtonComponent } from './creative-button.component';

describe('CreativeButtonComponent', () => {
  let component: CreativeButtonComponent;
  let fixture: ComponentFixture<CreativeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreativeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
