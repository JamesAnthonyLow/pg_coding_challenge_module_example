/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

import enTranslationMessages from './translations/en.json';

export const appLocales = [
  'en',
];

addLocaleData(enLocaleData);

export const formatTranslationMessages = (locale, messages) => {
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
};
