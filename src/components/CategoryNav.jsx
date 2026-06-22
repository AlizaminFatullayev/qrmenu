import { useTranslation } from 'react-i18next';

function scrollToSection(sectionId, onActiveCategoryChange) {
  onActiveCategoryChange(sectionId);
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export default function CategoryNav({ activeCategory, categories, onActiveCategoryChange }) {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-16 z-40 border-b border-surface-container bg-white/95 py-6 backdrop-blur-md">
      <div className="hide-scrollbar flex items-center gap-8 overflow-x-auto px-gutter">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              className={`focus-ring group flex shrink-0 flex-col items-center transition-opacity ${
                isActive ? '' : 'opacity-40 hover:opacity-100'
              }`}
              key={category.id}
              type="button"
              onClick={() => scrollToSection(category.id, onActiveCategoryChange)}
            >
              <span
                className={`font-label-md text-label-md mb-1 uppercase tracking-widest ${
                  isActive ? 'text-primary' : 'text-on-surface'
                }`}
              >
                {t(`categories.${category.id}`)}
              </span>
              <div
                className={`h-0.5 bg-primary transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
