import { Component } from '@angular/core';
import { UserDefinedSelectorComponent } from '../user-defined-selector/user-defined-selector.component';

@Component({
  selector: 'app-selector-in-template',
  standalone: true,
  imports:[UserDefinedSelectorComponent],
  template: `<span>Selector in another component template example</span><br/><user-defined/>`,
})
export class SelectorInTemplateComponent {

}
