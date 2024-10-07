import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface Skill {
  title: string;
  image: string;
  icon: string;
  iconBgClass: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      icon: 'fas fa-code',
      iconBgClass: 'bg-purple-500 group-hover:bg-purple-400',
      items: ['HTML & CSS', 'JavaScript', 'React & Angular']
    },
    {
      title: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      icon: 'fas fa-paint-brush',
      iconBgClass: 'bg-indigo-500 group-hover:bg-indigo-400',
      items: ['UI/UX Design', 'Figma', 'Adobe XD']
    },
    {
      title: 'Backend',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
      icon: 'fas fa-database',
      iconBgClass: 'bg-blue-500 group-hover:bg-blue-400',
      items: ['Node.js', 'Python', 'SQL & NoSQL']
    }
  ];

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    // this.title.setTitle('Skills');
    // this.meta.addTags([
    //   { name: 'description', content: 'View John Doe\'s skills and expertise in web development, design, and backend programming.' },
    //   { name: 'keywords', content: 'skills, web development, design, backend, programming' }
    // ]);
  }
}
