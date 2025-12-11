import { uk } from './uk';
import { en } from './en';
import { ru } from './ru';

export type Language = 'uk' | 'en' | 'ru';
export type Translations = typeof uk;

export const translations: Record<Language, Translations> = {
  uk,
  en,
  ru,
};

export const languageNames: Record<Language, string> = {
  uk: 'UK',
  en: 'EN',
  ru: 'RU',
};
