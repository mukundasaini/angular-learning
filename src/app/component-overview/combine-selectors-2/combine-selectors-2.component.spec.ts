import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineSelectors2Component } from './combine-selectors-2.component';

describe('CombineSelectors2Component', () => {
  let component: CombineSelectors2Component;
  let fixture: ComponentFixture<CombineSelectors2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineSelectors2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombineSelectors2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
