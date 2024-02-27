import { Routes } from '@angular/router';

import {VideoGridComponent} from './components/video-grid/video-grid.component';
import {SubscriptionsComponent} from './components/subscriptions/subscriptions.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [


    { path: '', component: HomepageComponent },
    { path: 'second-component', component: SubscriptionsComponent },
];
