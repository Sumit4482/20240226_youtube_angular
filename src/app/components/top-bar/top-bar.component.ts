import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  menuIconUrl = 'assets/icons/menu.png';
  youtubeLogoUrl = 'assets/icons/youtube_logo.png';
  searchIconUrl = 'assets/icons/search.png';
  voiceSearchIconUrl = 'assets/icons/voice search.png';
  uploadIconUrl = 'assets/icons/upload.png';
  notificationsIconUrl = 'assets/icons/notifications.png';
  notificationsCount = '9+';
  profileIconUrl = 'assets/icons/user.png';
}
