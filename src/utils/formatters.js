const letterMap = {
  Ə: 'e',
  ə: 'e',
  I: 'i',
  ı: 'i',
  İ: 'i',
  Ö: 'o',
  ö: 'o',
  Ü: 'u',
  ü: 'u',
  Ğ: 'g',
  ğ: 'g',
  Ş: 's',
  ş: 's',
  Ç: 'c',
  ç: 'c',
};

export function normalizeSearchText(value = '') {
  return value
    .toString()
    .replace(/[ƏəIıİÖöÜüĞğŞşÇç]/g, (letter) => letterMap[letter] || letter)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
    .trim();
}

export function formatPrice(price, t) {
  return `${price} ${t('price.currency')}`;
}

export function getLocalizedName(item, language) {
  return language === 'ru' ? item.name_ru : item.name_az;
}
