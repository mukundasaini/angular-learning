import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-oninit-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-oninit-child.component.html',
  styleUrl: './ng-oninit-child.component.css'
})
export class NgOninitChildComponent {
  public color: string = '';
  @Output() newColorEvent = new EventEmitter<string>();


  onAddColor() {
    this.newColorEvent.emit(this.color);
  }
}
