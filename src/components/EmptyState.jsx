import { useTranslation } from 'react-i18next';

export default function EmptyState() {
  const { t } = useTranslation();

  return (
    <div className="px-gutter my-16 text-center">
      <span className="material-symbols-outlined mb-4 text-primary" aria-hidden="true">
        search
      </span>
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-2 text-on-surface">
        {t('labels.noResultsTitle')}
      </h2>
      <p className="mx-auto max-w-md text-sm leading-relaxed text-on-surface-variant">
        {t('labels.noResultsText')}
      </p>
    </div>
  );
}
