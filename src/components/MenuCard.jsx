import { useTranslation } from 'react-i18next';
import { formatPrice, getLocalizedName } from '../utils/formatters.js';

export default function MenuCard({ category, item, index }) {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const itemName = getLocalizedName(item, language);
  const variants = item.variants || [];

  return (
    <article
      className="gold-border group flex flex-col overflow-hidden opacity-0 translate-y-4 transition-all duration-1000"
      style={{ transitionDelay: `${Math.min(index * 35, 280)}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0"
          src={item.image}
          alt={itemName}
          loading="lazy"
        />
        <div className="absolute right-4 top-4 border border-primary/20 bg-white/90 px-4 py-1.5 backdrop-blur-sm">
          <span className="font-label-md text-label-md text-on-surface">
            {variants.length ? formatPrice(item.price, t) : formatPrice(item.price, t)}
          </span>
        </div>
      </div>

      <div className="p-container-padding text-center">
        <h3 className="font-title-md text-title-md mb-3 tracking-tight text-on-surface">
          {itemName}
        </h3>

        {variants.length ? (
          <div className="mx-auto mb-6 grid max-w-xs gap-2">
            {variants.map((variant) => (
              <p
                className="flex items-center justify-center gap-3 text-sm leading-relaxed text-on-surface-variant"
                key={`${item.id}-${variant.key}`}
              >
                <span>{t(`variants.${variant.key}`)}</span>
                <span className="text-primary">{formatPrice(variant.price, t)}</span>
              </p>
            ))}
          </div>
        ) : null}

        <div className="flex items-center justify-center">
          <span className="bg-primary/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
            {t(`categories.${category.id}`)}
          </span>
        </div>
      </div>
    </article>
  );
}
