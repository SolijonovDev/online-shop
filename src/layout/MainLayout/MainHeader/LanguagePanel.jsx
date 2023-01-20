import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Button } from '@/components/Button';

export const LanguagePanel = () => {
  const router = useRouter();
  const { pathname, query, locale: currentLocale } = router;

  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  useEffect(() => {
    localStorage.setItem('locale', selectedLocale);
    router.push({ pathname, query }, undefined, { locale: selectedLocale });
  }, [selectedLocale]);

  return (
    <div>
      <Button onClick={() => setSelectedLocale('en')}>English</Button>
      <Button onClick={() => setSelectedLocale('ru')}>Russian</Button>
      <Button onClick={() => setSelectedLocale('uz')}>Uzbek</Button>
    </div>
  );
};
