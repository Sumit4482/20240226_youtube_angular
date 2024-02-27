import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribed-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscribed-videos.component.html',
  styleUrl: './subscribed-videos.component.css',
})
export class SubscribedVideosComponent {
  videoData = [
    {
      thumbnail: 'thumbnail-1.webp',
      time: '6:31:24',
      channelImage: 'channel-1.jpg',
      title: 'HTML & CSS Full Course - Beginner to Pro',
      author: 'SuperSimpleDev',
      views: '7.2M views &#183; 1 year ago',
      subscribed: true,
    },

    {
      thumbnail: 'thumbnail-3.jpg',
      time: '2:03:40',
      channelImage: 'channel-3.jpg',
      title: 'The Role of IT Tools in Academics | EduVerse',
      author: 'Anomalucy',
      views: '92 views &#183; 1 month ago',
      subscribed: true,
    },

    {
      thumbnail: 'thumbnail-5.jpg',
      time: '17:55',
      channelImage: 'channel-5.jpg',
      title: "How I'd Learn AI in 2023 (if I could start over)",
      author: 'Dave Ebbelaar',
      views: '203K views &#183; 3 months ago',
      subscribed: true,
    },

    {
      thumbnail: 'thumbnail-7.jpg',
      time: '13:10',
      channelImage: 'channel-7.jpg',
      title: 'Can AI really save the World? ft. Bill Gates',
      author: 'Mrwhosetheboss',
      views: '1M views &#183; 2 weeks ago',
      subscribed: true,
    },

    {
      thumbnail: 'thumbnail-9.jpg',
      time: '22:07',
      channelImage: 'channel-9.jpg',
      title: "World's Largest Devil's Toothpaste Explosion",
      author: 'Mark Rober',
      views: '88M views &#183; 3 years ago',
      subscribed: true,
    },

    {
      thumbnail: 'thumbnail-11.jpg',
      time: '13:09',
      channelImage: 'channel-11.jpg',
      title: "Why Wordle Won't Go Away",
      author: 'Colin and Samir',
      views: '80K views &#183; 1 year ago',
      subscribed: true,
    },
  ];
}
