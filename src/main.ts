import { bootstrapApplication } from '@angular/platform-browser';

import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { RootComponent } from './app/root.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions())
  ]
};

bootstrapApplication(RootComponent, appConfig)
  .catch((err) => console.error(err));
