import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-primary/10 bg-white/80 px-gutter backdrop-blur-md transition-opacity duration-300">
      <div className="w-16">
        <a className="focus-ring inline-block text-primary" href="#top" aria-label={t('restaurant.name')}>
          <span className="font-display-lg text-display-lg">{t('restaurant.shortName')}</span>
        </a>
      </div>
      <h1 className="font-display-lg text-display-lg truncate text-center uppercase tracking-[0.2em] text-primary">
        {t('restaurant.name')}
      </h1>
      <div className="flex w-16 justify-end">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
