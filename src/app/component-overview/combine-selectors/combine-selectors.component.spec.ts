import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineSelectorsComponent } from './combine-selectors.component';

describe('CombineSelectorsComponent', () => {
  let component: CombineSelectorsComponent;
  let fixture: ComponentFixture<CombineSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineSelectorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombineSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
