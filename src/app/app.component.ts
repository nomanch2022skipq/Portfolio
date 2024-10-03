import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLandingSectionComponent } from './components/home-landing-section/home-landing-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScrollService } from './services/scroll.service';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeLandingSectionComponent, AboutMeComponent, ProjectsComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['home', 'about', 'projects', 'contact'];
    let currentSection = '';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          currentSection = section;
          break;
        }
      }
    }

    if (currentSection) {
      this.scrollService.setActiveSection(currentSection);
    }
  }
}
