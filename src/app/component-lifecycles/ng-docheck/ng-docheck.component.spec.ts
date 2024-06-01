import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDocheckComponent } from './ng-docheck.component';

describe('NgDocheckComponent', () => {
  let component: NgDocheckComponent;
  let fixture: ComponentFixture<NgDocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDocheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
