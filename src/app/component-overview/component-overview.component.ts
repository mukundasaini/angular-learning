import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HtmlInternalComponent } from "./html-internal/html-internal.component";
import { HtmlLinkComponent } from './html-link/html-link.component';
import { CssLinkComponent } from "./css-link/css-link.component";
import { CssMultipleLinkComponent } from "./css-multiple-link/css-multiple-link.component";
import { CssInternalComponent } from "./css-internal/css-internal.component";

@Component({
    selector: 'app-component-overview',
    standalone: true,
    templateUrl: './component-overview.component.html',
    styleUrl: './component-overview.component.css',
    imports: [RouterModule, HtmlLinkComponent, HtmlInternalComponent, CssLinkComponent, CssMultipleLinkComponent, CssInternalComponent]
})
export class ComponentOverviewComponent {

}
