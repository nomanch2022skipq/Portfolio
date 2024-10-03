import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ScrollService } from './services/scroll.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ScrollService
  ]
};
