import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSelectorComponent } from './default-selector.component';

describe('DefaultSelectorComponent', () => {
  let component: DefaultSelectorComponent;
  let fixture: ComponentFixture<DefaultSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
