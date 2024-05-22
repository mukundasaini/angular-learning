import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOninitChildComponent } from './ng-oninit-child.component';

describe('NgOninitChildComponent', () => {
  let component: NgOninitChildComponent;
  let fixture: ComponentFixture<NgOninitChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOninitChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgOninitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
