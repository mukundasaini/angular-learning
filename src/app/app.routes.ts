import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComponentsComponent } from './components/components.component';
import { TemplatesComponent } from './templates/templates.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import { ComponentLifecyclesComponent } from './component-lifecycles/component-lifecycles.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

export const routes: Routes = [

    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    {
        path: 'components', component: ComponentsComponent, children: [
            { path: '', component: ComponentOverviewComponent },
            { path: 'lifecycles', component: ComponentLifecyclesComponent },
            { path: 'view-encapsulation', component: ViewEncapsulationComponent },

        ]
    },
    { path: 'templates', component: TemplatesComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: '**', redirectTo: '' },
];
