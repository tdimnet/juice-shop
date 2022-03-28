/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { datadogRum } from '@datadog/browser-rum';


import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

datadogRum.init({
    applicationId: '608e0c3e-d223-4423-a9f3-bae72d30fd67',
    clientToken: 'pubc401d9f72a20447a66e4162b1a4c0e3f',
    site: 'datadoghq.eu',
    service:'ng-juice-shop',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input'
});

datadogRum.startSessionReplayRecording();

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: Error) => console.log(err))
