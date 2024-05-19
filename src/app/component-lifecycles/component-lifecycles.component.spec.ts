import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecyclesComponent } from './component-lifecycles.component';

describe('ComponentLifecyclesComponent', () => {
  let component: ComponentLifecyclesComponent;
  let fixture: ComponentFixture<ComponentLifecyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLifecyclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentLifecyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
