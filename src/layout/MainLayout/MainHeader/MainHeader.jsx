import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const MainHeader = () => {
  const router = useRouter();
  const { pathname, query, locale: currentLocale } = router;

  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  useEffect(() => {
    localStorage.setItem('locale', selectedLocale);
    router.push({ pathname, query }, undefined, { locale: selectedLocale });
  }, [selectedLocale]);

  return (
    <nav>
      <button onClick={() => setSelectedLocale('en')}>English</button>
      <button onClick={() => setSelectedLocale('ru')}>Russian</button>
      <button onClick={() => setSelectedLocale('uz')}>Uzbek</button>
    </nav>
  );
};
