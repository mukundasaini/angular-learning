import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoSelectorsComponent } from './pseudo-selectors.component';

describe('PseudoSelectorsComponent', () => {
  let component: PseudoSelectorsComponent;
  let fixture: ComponentFixture<PseudoSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PseudoSelectorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PseudoSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
