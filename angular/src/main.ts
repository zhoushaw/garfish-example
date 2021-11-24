import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (!window.__GARFISH__) {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
}

export const provider = () => {
  return {
    render(): void {
      platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
    },
    destroy(): void {},
  };
};
