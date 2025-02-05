import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitchProps {
  currentLang: 'id' | 'en';
  onSwitch: (lang: 'id' | 'en') => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ currentLang, onSwitch }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => onSwitch(currentLang === 'id' ? 'en' : 'id')}
        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium uppercase">{currentLang}</span>
      </button>
    </div>
  );
};