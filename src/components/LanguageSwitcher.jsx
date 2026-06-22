import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage || i18n.language;

  return (
    <div
      className="inline-flex items-center gap-2"
      aria-label={t('header.language')}
    >
      {languages.map((language) => (
        <button
          className={`focus-ring font-label-md text-label-md transition-colors ${
            activeLanguage === language.code
              ? 'text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          key={language.code}
          type="button"
          onClick={() => i18n.changeLanguage(language.code)}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
