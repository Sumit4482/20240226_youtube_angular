import { Routes } from '@angular/router';
import {SubscriptionsComponent} from './components/subscriptions/subscriptions.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'second-component', component: SubscriptionsComponent },
    { path: 'settings', component:SettingsComponent}
];
