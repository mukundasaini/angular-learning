import { Component } from '@angular/core';

@Component({
  selector: 'app-html-internal',
  standalone: true,
  imports: [],
  template: '<p class="p-3 bg-secondary" > This is html-internal component Logic of this example include in follwing' 
    .concat('file./app/component-overview/html-internal/html-internal.component.ts <br>')
    .concat('Download this project code to see the example</p>')
})
export class HtmlInternalComponent {

}
