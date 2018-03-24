import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { NgModuleRef } from '@angular/core/src/linker/ng_module_factory';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

export const hmrBootstrap = (module, bootstrap: () => Promise<NgModuleRef<any>>) => {
  let ngModule: NgModuleRef<any>;

  module.hot.accept();

  // TODO: I want to change this for myself
  bootstrap().then(MODULE_REF => {
    if (!module['hot']) return;
    module['hot']['accept']();
    if (MODULE_REF.instance['hmrOnInit'] && module['hot']['data']) {
      MODULE_REF.instance['hmrOnInit'](module['hot']['data']);
    }
    if (MODULE_REF.instance['hmrOnStatus']) {
      module['hot']['apply'](function(status) {
        MODULE_REF.instance['hmrOnStatus'](status);
      });
    }
    if (MODULE_REF.instance['hmrOnCheck']) {
      module['hot']['check'](function(err, outdatedModules) {
        MODULE_REF.instance['hmrOnCheck'](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance['hmrOnDecline']) {
      module['hot']['decline'](function(dependencies) {
        MODULE_REF.instance['hmrOnDecline'](dependencies);
      });
    }
    module['hot']['dispose'](function(store) {
      if (MODULE_REF.instance['hmrOnDestroy']) {
        MODULE_REF.instance['hmrOnDestroy'](store);
      }
      MODULE_REF.destroy();
      if (MODULE_REF.instance['hmrAfterDestroy']) {
        MODULE_REF.instance['hmrAfterDestroy'](store);
      }
    });

    return MODULE_REF;
  });
};

if (environment.hmr) {
  if (module['hot']) hmrBootstrap(module, bootstrap);
  else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else bootstrap();
