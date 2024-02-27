import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { VideoGridComponent } from "../video-grid/video-grid.component";
import { CommonModule } from '@angular/common';
import { SubscribedVideosComponent } from "../subscribed-videos/subscribed-videos.component";

@Component({
    selector: 'app-subscriptions',
    standalone: true,
    templateUrl: './subscriptions.component.html',
    styleUrl: './subscriptions.component.css',
    imports: [TopBarComponent, SideBarComponent, VideoGridComponent, SubscribedVideosComponent]
})
export class SubscriptionsComponent {

}
