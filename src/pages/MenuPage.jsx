import CategoryNav from '../components/CategoryNav.jsx';
import CategorySection from '../components/CategorySection.jsx';
import EmptyState from '../components/EmptyState.jsx';
import Header from '../components/Header.jsx';
import SearchBar from '../components/SearchBar.jsx';
import useMenuSearch from '../hooks/useMenuSearch.js';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MenuPage() {
  const { t } = useTranslation();
  const { allItemCount, categories, hasQuery, query, setQuery, totalItems } = useMenuSearch();
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');

  useEffect(() => {
    if (!categories.some((category) => category.id === activeCategory)) {
      setActiveCategory(categories[0]?.id || '');
    }
  }, [activeCategory, categories]);

  useEffect(() => {
    const cards = document.querySelectorAll('.gold-border');

    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => {
        card.classList.add('opacity-100', 'translate-y-0');
        card.classList.remove('opacity-0', 'translate-y-4');
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [categories, query]);

  return (
    <div id="top" className="min-h-screen bg-background text-on-background font-body-md antialiased">
      <Header />

      <main className="pb-12 pt-16">
        <CategoryNav
          activeCategory={activeCategory}
          categories={categories}
          onActiveCategoryChange={setActiveCategory}
        />

        <section className="px-gutter mt-8 text-center">
          <p className="font-caption text-caption uppercase tracking-[0.3em] text-primary">
            {t('labels.source')}
          </p>
          <div className="mt-6">
            <SearchBar onQueryChange={setQuery} query={query} />
          </div>
          <p className="font-caption text-caption mt-4 uppercase tracking-[0.2em] text-on-surface-variant">
            {hasQuery
              ? t('labels.items', { count: totalItems })
              : t('labels.items', { count: allItemCount })}
          </p>
        </section>

        <div id="menu">
          {categories.length ? (
            categories.map((category) => (
              <CategorySection category={category} key={category.id} />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </main>

      <footer className="border-t border-primary/10 px-gutter py-12 text-center">
        <div className="font-display-lg mb-4 text-lg uppercase tracking-[0.4em] text-primary/40">
          {t('restaurant.name')}
        </div>
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
          {t('labels.footer')} · {t('labels.items', { count: allItemCount })}
        </p>
      </footer>
    </div>
  );
}
