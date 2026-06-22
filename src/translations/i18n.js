import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import az from './az.json';
import ru from './ru.json';

i18n.use(initReactI18next).init({
  resources: {
    az: { translation: az },
    ru: { translation: ru },
  },
  lng: 'az',
  fallbackLng: 'az',
  supportedLngs: ['az', 'ru'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
