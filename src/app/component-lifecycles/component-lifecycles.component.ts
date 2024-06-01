import { Component, OnInit } from '@angular/core';
import { NgOnchangesComponent } from "./ng-onchanges/ng-onchanges.component";
import { FormsModule } from '@angular/forms';
import { NgOninitComponent } from "./ng-oninit/ng-oninit.component";
import { RouterModule } from '@angular/router';
import { NgDocheckComponent } from './ng-docheck/ng-docheck.component';
import { FragmentUtility } from '../fragment-utility';
import { FragmentUtilityComponent } from '../fragment-utility/fragment-utility.component';

@Component({
  selector: 'app-component-lifecycles',
  standalone: true,
  templateUrl: './component-lifecycles.component.html',
  styleUrl: './component-lifecycles.component.css',
  imports: [NgOnchangesComponent
    , FormsModule
    , NgOninitComponent
    , RouterModule
    , NgDocheckComponent
    , FragmentUtilityComponent]
})
export class ComponentLifecyclesComponent implements OnInit {

  public name: string = 'This is default value of input data for onChange example';
  public nameExample: string = '';
  public mainLinks: FragmentUtility = <FragmentUtility>{};
  routerLink: string = '/components/lifecycles/';

  onClearName() {
    this.name = '';
  }

  ngOnInit(): void {
    this.mainLinks.routerLink = this.routerLink;
    this.mainLinks.linkDetails = [];
    this.mainLinks.linkDetails.push({ fragment: 'ngOnChanges', linkText: 'ngOnChanges()' });
    this.mainLinks.linkDetails.push({ fragment: 'ngOnInit', linkText: 'ngOnInit()' });
    this.mainLinks.linkDetails.push({ fragment: 'ngDoCheck', linkText: 'ngDoCheck()' });
    this.mainLinks.linkDetails.push({ fragment: 'ngAfterContentInit', linkText: 'ngAfterContentInit()' });
    this.mainLinks.linkDetails.push({ fragment: 'ngAfterContentChecked', linkText: 'ngAfterContentChecked()' });
    this.mainLinks.linkDetails.push({ fragment: 'ngAfterViewInit', linkText: 'ngAfterViewInit()' });
    this.mainLinks.linkDetails.push({ fragment: 'ngAfterViewChecked', linkText: 'ngAfterViewChecked()' });
    this.mainLinks.linkDetails.push({ fragment: 'ngOnDestroy', linkText: 'ngOnDestroy()' });
  }
}
