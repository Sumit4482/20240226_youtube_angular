import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { VideoGridComponent } from "./components/video-grid/video-grid.component";
import { SubscriptionsComponent } from "./components/subscriptions/subscriptions.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TopBarComponent, SideBarComponent, VideoGridComponent, SubscriptionsComponent, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'youtube-using-angular';
}
