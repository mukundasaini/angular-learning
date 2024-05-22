import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchanges',
  standalone: true,
  imports: [],
  templateUrl: './ng-onchanges.component.html',
  styleUrl: './ng-onchanges.component.css'
})
export class NgOnchangesComponent implements OnChanges {

  @Input() typedName: string = '';

  public logName:string='';

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.logName = `${propName}: currentValue = ${cur}, previousValue = ${prev}`;
    }
  }
}
