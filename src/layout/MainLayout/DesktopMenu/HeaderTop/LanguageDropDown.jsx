import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Button } from '@/components/Button';

import styles from '@/layout/MainLayout/DesktopMenu/HeaderTop/LanguageDropDown.module.scss';

const titles = {
  uz: 'Uzbek',
  ru: 'Russkiy',
  en: 'English',
};

export const LanguageDropDown = () => {
  const router = useRouter();
  const { pathname, query, locale: currentLocale } = router;

  const [show, setShow] = useState(false);

  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  useEffect(() => {
    localStorage.setItem('locale', selectedLocale);
    router.push({ pathname, query }, undefined, { locale: selectedLocale });
  }, [selectedLocale]);

  const handleClick = locale => {
    setShow(false);
    setSelectedLocale(locale);
  };

  return (
    <div className={styles.langDropDown}>
      <Button variant="text" className={styles.btn} onClick={() => setShow(!show)}>
        {titles[selectedLocale]}
      </Button>
      {show && (
        <ul className={styles.dropDown}>
          {selectedLocale !== 'uz' && (
            <li>
              <Button
                className={styles.dropDownBtn}
                variant="text"
                onClick={() => handleClick('uz')}
              >
                Uzbek
              </Button>
            </li>
          )}
          {selectedLocale !== 'en' && (
            <li>
              <Button
                className={styles.dropDownBtn}
                variant="text"
                onClick={() => handleClick('en')}
              >
                English
              </Button>
            </li>
          )}
          {selectedLocale !== 'ru' && (
            <li>
              <Button
                className={styles.dropDownBtn}
                variant="text"
                onClick={() => handleClick('ru')}
              >
                Russkiy
              </Button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
