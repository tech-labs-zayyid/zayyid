export interface LanguageContent {
  nav: {
    about: string;
    services: string;
    portfolio: string;
    why: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string[];
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  portfolio: {
    title: string;
    categories: Array<{
      title: string;
      projects: Array<{
        name: string;
        description: string;
      }>;
    }>;
  };
  why: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    info: {
      email: string;
      phone: string;
      address: string;
    };
  };
}