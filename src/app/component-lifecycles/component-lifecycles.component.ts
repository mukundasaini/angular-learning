import { Component } from '@angular/core';
import { NgOnchangesComponent } from "./ng-onchanges/ng-onchanges.component";
import { FormsModule } from '@angular/forms';
import { NgOninitComponent } from "./ng-oninit/ng-oninit.component";

@Component({
    selector: 'app-component-lifecycles',
    standalone: true,
    templateUrl: './component-lifecycles.component.html',
    styleUrl: './component-lifecycles.component.css',
    imports: [NgOnchangesComponent, FormsModule, NgOninitComponent]
})
export class ComponentLifecyclesComponent {
  public name: string = 'This is default value of input data for onChange example';

  onClearName() {
    this.name = '';
  }
}
