import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { I18N_DICTIONARY } from '@/_assets/i18next/dictionary';

export default {
  name: 'home',
  path: '/home',
  loadAction: () => import('./index'),
  // uncomment if you need translations
  i18n: {
    namespaces: [APP_NAMESPACE],
    version: 'appVersion',
    localDictionaryFiles: I18N_DICTIONARY,
  },
  params: {
    endpointsConfig: {
      fromWindow: true,
      staticPath: 'publicPathForReplace',
    },
  },
};
