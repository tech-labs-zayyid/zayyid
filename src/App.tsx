import React, { useState } from 'react';
import { content } from './data/content';
import { ParticlesBackground } from './components/Particles';
import { SectionParticles } from './components/SectionParticles';
import { FloatingShapes } from './components/FloatingShapes';
import { LanguageSwitch } from './components/LanguageSwitch';
import { ShoppingCart, Smartphone, Monitor, Cloud, Code, Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';

const icons = {
  'shopping-cart': ShoppingCart,
  'smartphone': Smartphone,
  'monitor': Monitor,
  'cloud': Cloud,
  'code': Code,
};

function App() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const t = content[lang];

  return (
    <>
      <Helmet>
        <title>Zayyid IT Consulting - Solusi Digital Inovatif untuk Bisnis Anda</title>
        <meta name="description" content="Zayyid IT Consulting menawarkan layanan pengembangan aplikasi web, mobile, desktop, dan solusi IT berbasis cloud untuk kebutuhan bisnis Anda. Dapatkan solusi teknologi inovatif dengan keamanan dan kualitas terbaik." />
        <meta name="keywords" content="pengembangan aplikasi, IT consulting, solusi digital, pengembangan e-commerce, aplikasi mobile, aplikasi desktop, sistem manajemen data, solusi kustom" />
        <meta name="author" content="Zayyid IT Consulting" />
        <meta property="og:title" content="Zayyid IT Consulting - Solusi Digital Inovatif untuk Bisnis Anda" />
        <meta property="og:description" content="Zayyid IT Consulting menyediakan layanan pengembangan teknologi untuk meningkatkan produktivitas bisnis Anda dengan solusi yang inovatif, aman, dan kustom." />
        <meta property="og:image" content="URL_gambar_tampilan" />
        <meta property="og:url" content="https://zayyidit.com" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
        <ParticlesBackground />
        <LanguageSwitch currentLang={lang} onSwitch={setLang} />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
          <FloatingShapes />
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
              alt="Technology Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-indigo-900 mb-6 animate-slide-up">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl text-indigo-700 animate-slide-up animate-delay-200">{t.hero.subtitle}</p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 relative" id="about">
          <SectionParticles type="connect" />
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-indigo-900 mb-8 animate-slide-up">{t.about.title}</h2>
                <div className="space-y-6">
                  {t.about.description.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-700 leading-relaxed animate-slide-up" style={{
                      animationDelay: `${(index + 1) * 200}ms`
                    }}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="relative animate-fade-in animate-delay-300">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team Collaboration"
                  className="rounded-lg shadow-2xl transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-indigo-900 relative" id="services">
          <SectionParticles variant="dark" type="bubbles" />
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center animate-slide-up">{t.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.items.map((service, index) => {
                const Icon = icons[service.icon as keyof typeof icons];
                return (
                  <div 
                    key={index} 
                    className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all animate-fade-in hover:scale-105 duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-indigo-100">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-4 relative" id="portfolio">
          <SectionParticles type="connect" />
          <FloatingShapes />
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-indigo-900 mb-12 text-center animate-slide-up">{t.portfolio.title}</h2>
            {t.portfolio.categories.map((category, index) => (
              <div key={index} className="mb-16 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <h3 className="text-2xl font-semibold text-indigo-800 mb-8">{category.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.map((project, pIndex) => (
                    <div 
                      key={pIndex} 
                      className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 animate-fade-in"
                      style={{ animationDelay: `${(index * 200) + (pIndex * 100)}ms` }}
                    >
                      <h4 className="text-lg font-semibold text-indigo-900 mb-2">{project.name}</h4>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-purple-900 relative" id="why">
          <SectionParticles variant="dark" type="bubbles" />
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Team Meeting"
                  className="rounded-lg shadow-2xl transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-12 animate-slide-up">{t.why.title}</h2>
                <div className="grid gap-6">
                  {t.why.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all animate-fade-in hover:scale-105 duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-indigo-100">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 relative" id="contact">
          <SectionParticles type="default" />
          <FloatingShapes />
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6 animate-slide-up">{t.contact.title}</h2>
            <p className="text-xl text-gray-700 mb-12 animate-slide-up animate-delay-100">{t.contact.subtitle}</p>
            
            <div className="flex flex-col items-center space-y-6 mb-12">
              {[
                { icon: Mail, href: `mailto:${t.contact.info.email}`, text: t.contact.info.email },
                { icon: Phone, href: `tel:${t.contact.info.phone}`, text: t.contact.info.phone },
                { icon: MapPin, href: undefined, text: t.contact.info.address }
              ].map((item, index) => {
                const Icon = item.icon;
                const Element = item.href ? 'a' : 'div';
                return (
                  <Element
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-6 h-6" />
                    <span>{item.text}</span>
                  </Element>
                );
              })}
            </div>

            <div className="relative animate-fade-in animate-delay-300">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Office"
                className="w-full h-64 object-cover rounded-lg mb-8 opacity-50 transition-transform hover:scale-105 duration-500"
              />
              <a
                href="#"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all hover:scale-105 duration-300"
              >
                {t.contact.cta}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;