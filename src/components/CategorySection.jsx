import { useTranslation } from 'react-i18next';
import MenuCard from './MenuCard.jsx';

export default function CategorySection({ category }) {
  const { t } = useTranslation();

  return (
    <section className="scroll-mt-36" id={category.id}>
      <div className="px-gutter mb-8 mt-10 text-center">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-2 italic text-on-surface">
          {t(`categories.${category.id}`)}
        </h2>
        <div className="mb-2 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-primary/30" />
          <p className="font-caption text-caption uppercase tracking-[0.3em] text-primary">
            {t('labels.categoryCount', { count: category.items.length })}
          </p>
          <div className="h-px w-8 bg-primary/30" />
        </div>
      </div>
      <div className="px-gutter space-y-12">
        {category.items.map((item, index) => (
          <MenuCard category={category} index={index} item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
