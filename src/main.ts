import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { ApplicationConfig } from '@angular/core';
import { RootComponent } from './app/root.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
  ],
};

bootstrapApplication(RootComponent, appConfig).catch((err) =>
  console.error(err),
);
