import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { strings } from '../i18n/strings';

export function useTranslation() {
  const { language } = useContext(LanguageContext);
  return strings[language];
}
