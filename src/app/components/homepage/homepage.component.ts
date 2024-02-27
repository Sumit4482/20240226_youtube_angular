import { Component } from '@angular/core';
import { SubscriptionsComponent } from "../subscriptions/subscriptions.component";
import { VideoGridComponent } from "../video-grid/video-grid.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [SubscriptionsComponent, VideoGridComponent, SideBarComponent, TopBarComponent]
})
export class HomepageComponent {

}
