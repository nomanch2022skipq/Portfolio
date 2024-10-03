import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Multi Marketo',
      description: 'An innovative solution for streamlining workflow processes and enhancing productivity across teams.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['React', 'Django', 'PostgreSQL', 'Celery', 'RabbitMQ', 'Mailgun', 'Material UI', 'Django REST Framework'],
      demoUrl: 'https://demo.projectalpha.com',
      githubUrl: 'https://github.com/yourusername/project-alpha'
    },
    {
      title: 'FTS (Follow The Show)',
      description: 'A sleek and intuitive mobile app for managing personal finances and investments with real-time market data.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['Django','React', 'PostgreSQL', 'Celery', 'Scrapy', 'Django REST Framework'],
      demoUrl: 'https://demo.projectbeta.com',
      githubUrl: 'https://github.com/yourusername/project-beta'
    },
    {
      title: 'Dispatch Tracking CRM',
      description: 'A cutting-edge e-commerce platform with AI-powered product recommendations and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['React', 'Django', 'PostgreSQL', 'Celery','Scrapy', 'Django REST Framework', 'Mailgun'],
      demoUrl: 'https://demo.projectgamma.com',
      githubUrl: 'https://github.com/yourusername/project-gamma'
    }
  ];
}
