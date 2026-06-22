import { useTranslation } from 'react-i18next';

export default function SearchBar({ query, onQueryChange }) {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full max-w-xl px-gutter">
      <label className="sr-only" htmlFor="menu-search">
        {t('search.label')}
      </label>
      <input
        className="focus-ring w-full border border-primary/20 bg-white px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant"
        id="menu-search"
        type="search"
        value={query}
        placeholder={t('search.placeholder')}
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </div>
  );
}
