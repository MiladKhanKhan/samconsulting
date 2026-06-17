import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-start pt-40 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 animate-fade-up">
          {t.hero.eyebrow}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold leading-[1.05] tracking-tight mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {t.hero.titlePre}
          <br />
          <em className="font-light not-italic">{t.hero.titleEm}</em> {t.hero.titlePost}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-4 mb-20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#services"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t.hero.ctaServices}
          </a>
          <a
            href="#contact"
            className="border border-foreground/20 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
          >
            {t.hero.ctaContact}
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {t.hero.stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-heading font-semibold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-5xl mt-auto pb-8">
        <a href="#services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={16} className="animate-bounce" />
          {t.hero.scroll}
        </a>
      </div>
    </section>
  );
};

export default Hero;
