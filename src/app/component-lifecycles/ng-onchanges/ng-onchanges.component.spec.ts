import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangesComponent } from './ng-onchanges.component';

describe('NgOnchangesComponent', () => {
  let component: NgOnchangesComponent;
  let fixture: ComponentFixture<NgOnchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOnchangesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgOnchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
