import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Angular',
      excerpt: 'Learn the basics of Angular and start building your first app.',
      author: 'John Doe',
      date: 'May 15, 2023',
      imageUrl: 'blog/cup.jpg',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Mastering TypeScript',
      excerpt: 'Dive deep into TypeScript and improve your coding skills.',
      author: 'Jane Smith',
      date: 'June 2, 2023',
      imageUrl: 'blog/seed.jpg',
      category: 'Programming'
    },
    {
      id: 3,
      title: 'Responsive Design Techniques',
      excerpt: 'Create beautiful, responsive websites that work on any device.',
      author: 'Mike Johnson',
      date: 'June 18, 2023',
      imageUrl: 'blog/wires.jpg',
      category: 'Design'
    },
    {
      id: 4,
      title: 'The Future of AI in Web Development',
      excerpt: 'Explore how AI is shaping the future of web development.',
      author: 'Sarah Lee',
      date: 'July 5, 2023',
      imageUrl: 'blog/tree.jpg',
      category: 'Technology'
    },
    {
      id: 5,
      title: 'Optimizing Angular Performance',
      excerpt: 'Learn techniques to make your Angular apps lightning fast.',
      author: 'Chris Brown',
      date: 'July 22, 2023',
      imageUrl: 'blog/dog.jpg',
      category: 'Web Development'
    }
  ];
}
