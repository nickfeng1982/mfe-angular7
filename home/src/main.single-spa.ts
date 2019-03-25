import 'core-js/es7/reflect';
import { enableProdMode, ApplicationRef } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import singleSpaAngular from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export default singleSpaAngular({
  mainModule: AppModule,
  angularPlatform: platformBrowserDynamic(),
  template: '<app-root />',
  Router,
  ApplicationRef,
  domElementGetter() {
    let containerEl = document.getElementById('app-root');
    if (!containerEl) {
      containerEl = document.createElement('div');
      containerEl.id = 'app-root';
      document.body.appendChild(containerEl);
    }

    return containerEl;
  },
});
