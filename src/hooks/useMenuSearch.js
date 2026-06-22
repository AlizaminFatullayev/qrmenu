import { useMemo, useState } from 'react';
import menu from '../data/menu.json';
import { normalizeSearchText } from '../utils/formatters.js';

const allItemCount = menu.reduce((sum, category) => sum + category.items.length, 0);

export default function useMenuSearch() {
  const [query, setQuery] = useState('');

  const normalizedQuery = normalizeSearchText(query);

  const categories = useMemo(() => {
    if (!normalizedQuery) {
      return menu;
    }

    return menu
      .map((category) => {
        const categoryText = normalizeSearchText(
          `${category.category_az} ${category.category_ru}`,
        );

        const items = category.items.filter((item) => {
          const searchText = normalizeSearchText(
            `${item.name_az} ${item.name_ru} ${categoryText}`,
          );

          return searchText.includes(normalizedQuery);
        });

        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [normalizedQuery]);

  const totalItems = categories.reduce((sum, category) => sum + category.items.length, 0);

  return {
    allItemCount,
    categories,
    hasQuery: normalizedQuery.length > 0,
    query,
    setQuery,
    totalItems,
  };
}
