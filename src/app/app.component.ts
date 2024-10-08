import { Component, OnInit, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLandingSectionComponent } from './components/home-landing-section/home-landing-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomeLandingSectionComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactUsComponent,
    SkillsComponent,
    BlogComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  
  sections = [
    { id: 'home', title: 'Home | My Portfolio', description: 'Welcome to my portfolio website' },
    { id: 'about', title: 'About Me | My Portfolio', description: 'Learn more about my background and experience' },
    { id: 'skills', title: 'My Skills | My Portfolio', description: 'Explore my technical skills and expertise' },
    { id: 'blog', title: 'Blog | My Portfolio', description: 'Read my latest blog posts and articles' },
    { id: 'projects', title: 'Projects | My Portfolio', description: 'Check out my latest projects and work' },
    { id: 'contact', title: 'Contact Me | My Portfolio', description: 'Get in touch with me for opportunities or collaborations' }
  ];

  ngOnInit() {
    this.updateMetadata(this.sections[0]);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset;
    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        this.updateMetadata(section);
        break;
      }
    }
  }

  private updateMetadata(section: { title: string, description: string }) {
    this.titleService.setTitle(section.title);
    this.metaService.updateTag({ name: 'description', content: section.description });
    // Update Open Graph tags
    this.metaService.updateTag({ property: 'og:title', content: section.title });
    this.metaService.updateTag({ property: 'og:description', content: section.description });
    // Update Twitter Card tags
    this.metaService.updateTag({ name: 'twitter:title', content: section.title });
    this.metaService.updateTag({ name: 'twitter:description', content: section.description });
  }
}
