import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ScrollService } from './app/services/scroll.service';

bootstrapApplication(AppComponent, {
  providers: [ScrollService]
}).catch(err => console.error(err));
