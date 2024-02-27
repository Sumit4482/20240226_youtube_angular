import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css',
    imports: [SideBarComponent, TopBarComponent]
})
export class SettingsComponent {

}
