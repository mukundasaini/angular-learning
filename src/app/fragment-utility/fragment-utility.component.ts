import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FragmentUtility } from '../fragment-utility';

@Component({
  selector: 'app-fragment-utility',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './fragment-utility.component.html',
})
export class FragmentUtilityComponent {

  @Input() linkDetails: FragmentUtility = <FragmentUtility>{};


}
