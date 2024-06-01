import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacSelectorComponent } from './tac-selector.component';

describe('TacSelectorComponent', () => {
  let component: TacSelectorComponent;
  let fixture: ComponentFixture<TacSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TacSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TacSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
