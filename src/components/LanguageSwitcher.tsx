import { useLanguage } from '@/contexts/LanguageContext';
import { Language, languageNames } from '@/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const languages: Language[] = ['uk', 'en', 'ru'];

  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-lg glass-card border border-border/50">
      {languages.map((lang, index) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-2 py-1 text-xs font-mono rounded transition-all duration-300 ${
            language === lang
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-primary'
          }`}
        >
          {languageNames[lang]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
