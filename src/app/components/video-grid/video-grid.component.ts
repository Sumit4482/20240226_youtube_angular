import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-grid.component.html',
  styleUrl: './video-grid.component.css'
})
export class VideoGridComponent {
   videoData = [
    { 
      thumbnail: 'thumbnail-1.webp', 
      time: '6:31:24', 
      channelImage: 'channel-1.jpg', 
      title: 'HTML & CSS Full Course - Beginner to Pro', 
      author: 'SuperSimpleDev', 
      views: '7.2M views &#183; 1 year ago' 
    },
    { 
      thumbnail: 'thumbnail-2.jpg', 
      time: '6:14', 
      channelImage: 'channel-2.jpeg', 
      title: '1,000 Deaf People Hear For The First Time', 
      author: 'MrBeast', 
      views: '129M views &#183; 6 months ago' 
    },
    { 
      thumbnail: 'thumbnail-3.jpg', 
      time: '2:03:40', 
      channelImage: 'channel-3.jpg', 
      title: 'The Role of IT Tools in Academics | EduVerse', 
      author: 'Anomalucy', 
      views: '92 views &#183; 1 month ago' 
    },
    { 
      thumbnail: 'thumbnail-4.jpg', 
      time: '3:04', 
      channelImage: 'channel-4.jpg', 
      title: 'lil peep - benz truck (prod. smokeasac)', 
      author: 'Lil Peep', 
      views: '273M views &#183; 6 years ago' 
    },
    { 
      thumbnail: 'thumbnail-5.jpg', 
      time: '17:55', 
      channelImage: 'channel-5.jpg', 
      title: 'How I\'d Learn AI in 2023 (if I could start over)', 
      author: 'Dave Ebbelaar', 
      views: '203K views &#183; 3 months ago' 
    },
    { 
      thumbnail: 'thumbnail-6.jpg', 
      time: '1:53:44', 
      channelImage: 'channel-6.jpg', 
      title: '100 Players Simulate The PURGE in Minecraft', 
      author: 'SpeedSilver', 
      views: '17M views &#183; 9 months ago' 
    },
    { 
      thumbnail: 'thumbnail-7.jpg', 
      time: '13:10', 
      channelImage: 'channel-7.jpg', 
      title: 'Can AI really save the World? ft. Bill Gates', 
      author: 'Mrwhosetheboss', 
      views: '1M views &#183; 2 weeks ago' 
    },
    { 
      thumbnail: 'thumbnail-8.jpg', 
      time: '45:20', 
      channelImage: 'channel-8.jpg', 
      title: 'I Exposed a $500,000,000 Ponzi Scheme', 
      author: 'Coffeezilla', 
      views: '3.8M views &#183; 5 months ago' 
    },
    { 
      thumbnail: 'thumbnail-9.jpg', 
      time: '22:07', 
      channelImage: 'channel-9.jpg', 
      title: 'World\'s Largest Devil\'s Toothpaste Explosion', 
      author: 'Mark Rober', 
      views: '88M views &#183; 3 years ago' 
    },
    { 
      thumbnail: 'thumbnail-10.jpg', 
      time: '5:23', 
      channelImage: 'channel-10.jpg', 
      title: 'Travis Scott - SICKO MODE ft. Drake', 
      author: 'Travis Scott', 
      views: '1.1B views &#183; 5 years ago' 
    },
    { 
      thumbnail: 'thumbnail-11.jpg', 
      time: '13:09', 
      channelImage: 'channel-11.jpg', 
      title: 'Why Wordle Won\'t Go Away', 
      author: 'Colin and Samir', 
      views: '80K views &#183; 1 year ago' 
    },
    { 
      thumbnail: 'thumbnail-12.jpg', 
      time: '38:58', 
      channelImage: 'channel-12.jpg', 
      title: 'Backyard Time Machine: The Time Travel Mystery of Mike “Mad Man” Marcum', 
      author: 'The Why Files', 
      views: '2.1M views &#183; 6 days ago' 
    }
  ];
  
}
