import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HtmlInternalComponent } from "./html-internal/html-internal.component";
import { HtmlLinkComponent } from './html-link/html-link.component';
import { CssLinkComponent } from "./css-link/css-link.component";
import { CssMultipleLinkComponent } from "./css-multiple-link/css-multiple-link.component";
import { CssInternalComponent } from "./css-internal/css-internal.component";
import { FragmentUtilityComponent } from '../fragment-utility/fragment-utility.component';
import { FragmentUtility, LinkDetails } from '../fragment-utility';
import { DefaultSelectorComponent } from "./default-selector/default-selector.component";
import { SelectorInTemplateComponent } from "./selector-in-template/selector-in-template.component";
import { UserDefinedSelectorComponent } from './user-defined-selector/user-defined-selector.component';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { TacSelectorComponent } from './tac-selector/tac-selector.component';
import { CombineSelectorsComponent } from './combine-selectors/combine-selectors.component';
import { PseudoSelectorsComponent } from './pseudo-selectors/pseudo-selectors.component';
import { CombineSelectors2Component } from './combine-selectors-2/combine-selectors-2.component';

@Component({
    selector: 'app-component-overview',
    standalone: true,
    templateUrl: './component-overview.component.html',
    imports: [RouterModule,
        HtmlLinkComponent,
        HtmlInternalComponent,
        CssLinkComponent,
        FragmentUtilityComponent,
        CssMultipleLinkComponent,
        CssInternalComponent,
        DefaultSelectorComponent,
        SelectorInTemplateComponent,
        UserDefinedSelectorComponent,
        AttributeSelectorComponent,
        ClassSelectorComponent,
        TacSelectorComponent,
        CombineSelectorsComponent,
        CombineSelectors2Component,
        PseudoSelectorsComponent]
})
export class ComponentOverviewComponent implements OnInit {

    public mainLinks: FragmentUtility = <FragmentUtility>{};
    public htmlLinks: FragmentUtility = <FragmentUtility>{};
    public cssLinks: FragmentUtility = <FragmentUtility>{};
    routerLink: string = '/components/';

    ngOnInit(): void {
        this.mainLinks.routerLink = this.routerLink;
        this.mainLinks.linkDetails = [];
        this.mainLinks.linkDetails.push({ fragment: 'html-file', linkText: 'Html Section' });
        this.mainLinks.linkDetails.push({ fragment: 'css-file', linkText: 'CSS Section' });
        this.mainLinks.linkDetails.push({ fragment: 'ts-file', linkText: 'Typescript Section' });

        this.htmlLinks.routerLink = this.routerLink;
        this.htmlLinks.linkDetails = [];
        this.htmlLinks.linkDetails.push({ fragment: 'html-file-link', linkText: 'Link html example' });
        this.htmlLinks.linkDetails.push({ fragment: 'html-file-internal', linkText: 'Internal html example' });

        this.cssLinks.routerLink = this.routerLink;
        this.cssLinks.linkDetails = [];
        this.cssLinks.linkDetails.push({ fragment: 'css-file-link', linkText: 'Link css example' });
        this.cssLinks.linkDetails.push({ fragment: 'css-file-multiple-link', linkText: 'Multiple Link css example' });
        this.cssLinks.linkDetails.push({ fragment: 'css-file-internal', linkText: 'Internal css example' });

    }

}
