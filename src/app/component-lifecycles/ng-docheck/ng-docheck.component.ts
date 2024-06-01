import { Component, DoCheck, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ng-docheck',
  standalone: true,
  imports: [],
  templateUrl: './ng-docheck.component.html',
  styleUrl: './ng-docheck.component.css'
})
export class NgDocheckComponent implements OnChanges, DoCheck {

  currentValue: string = '';
  previousValue: string = '';
  @Input() typedNameDoCheckExample: string = '';
  public logName: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      this.currentValue = JSON.stringify(chng.currentValue);
      this.previousValue = JSON.stringify(chng.previousValue);
    }
  }

  ngDoCheck(): void {
    this.logName = `currentValue = ${this.currentValue}, previousValue = ${this.previousValue}`;
  }

}
