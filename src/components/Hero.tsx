import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import TypewriterHeadline from "@/components/TypewriterHeadline";

const Hero = () => {
  const { t, lang } = useLanguage();
  const [introDone, setIntroDone] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-start pt-40 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 animate-fade-up">
          {t.hero.eyebrow}
        </p>

        {/* Headline is typed out like a keyboard, then ends with looping dots.
            key={lang} replays the animation in the chosen language. */}
        <TypewriterHeadline
          key={lang}
          pre={t.hero.titlePre}
          em={t.hero.titleEm}
          post={t.hero.titlePost}
          onDone={() => setIntroDone(true)}
        />

        {/* Everything below fades in once the handwriting has finished. */}
        <div
          className={`transition-all duration-700 ease-out ${
            introDone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-20">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 bg-brand text-brand-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t.hero.ctaServices}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="border border-foreground/20 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              {t.hero.ctaContact}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg">
            {t.hero.stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-heading font-semibold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl mt-auto pb-8">
        <a
          href="#services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown size={16} className="animate-bounce" />
          {t.hero.scroll}
        </a>
      </div>
    </section>
  );
};

export default Hero;
