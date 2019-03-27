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
  template: '<app-root/>',
  domElementGetter() {
    let containerEl = document.getElementById('home');
    if (!containerEl) {
      containerEl = document.createElement('div');
      containerEl.id = 'home';
      document.body.appendChild(containerEl);
    }

    return containerEl;
  },
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

