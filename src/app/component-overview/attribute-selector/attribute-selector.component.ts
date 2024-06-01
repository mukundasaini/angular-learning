import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[circle-card]',
  standalone: true,
  imports: [],
  templateUrl: './attribute-selector.component.html',
  styleUrl: './attribute-selector.component.css'
})
export class AttributeSelectorComponent implements OnInit {
  @Input() cardContentId: string = '';
  ngOnInit(): void {

  }



}
