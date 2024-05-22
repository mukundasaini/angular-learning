import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgOninitChildComponent } from "../ng-oninit-child/ng-oninit-child.component";

@Component({
  selector: 'app-ng-oninit',
  standalone: true,
  templateUrl: './ng-oninit.component.html',
  styleUrl: './ng-oninit.component.css',
  imports: [CommonModule, NgOninitChildComponent]
})
export class NgOninitComponent implements OnInit {
  colorNames: string[] = [];

  ngOnInit(): void {
    this.colorNames.push("Black");
    this.colorNames.push("Red");
  }

  onAddColor(color: string) {
    this.colorNames.push(color);
  }

}
