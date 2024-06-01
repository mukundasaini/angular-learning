import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './components.component.html',
})
export class ComponentsComponent  {

}
