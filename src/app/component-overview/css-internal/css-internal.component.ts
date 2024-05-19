import { Component } from '@angular/core';

@Component({
  selector: 'app-css-internal',
  standalone: true,
  imports: [],
  templateUrl: './css-internal.component.html',
  styles: ['.css-internal-class-example{background-color: black;color: white; border: green 5px;}',
  '#css-internal-id-example{font-style: italic; color: grey; }'
]
})
export class CssInternalComponent {

}
