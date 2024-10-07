import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { Subscription } from 'rxjs';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  navItems: NavItem[] = [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Skills', path: 'skills' },
    { label: 'Blog', path: 'blog' },
    { label: 'Projects', path: 'projects' },
    { label: 'Contact', path: 'contact' },
  ];

  activeSection: string = '';
  private subscription: Subscription | undefined;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.subscription = this.scrollService.activeSection$.subscribe(
      (section) => (this.activeSection = section)
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
