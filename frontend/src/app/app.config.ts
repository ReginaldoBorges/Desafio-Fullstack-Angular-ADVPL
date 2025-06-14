import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { PoHttpRequestModule } from '@po-ui/ng-components';
import { protheusAuthorizationInterceptor } from './shared/protheus-authorization.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([PoHttpRequestModule]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([protheusAuthorizationInterceptor])
    ),
  ],
};
