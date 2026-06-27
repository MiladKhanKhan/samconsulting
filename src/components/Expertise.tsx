import { useLanguage } from "@/i18n/LanguageContext";

const Expertise = () => {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="py-24 md:py-32 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-brand mb-3">
          {t.expertise.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-tight mb-16">
          {t.expertise.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.expertise.categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-heading font-semibold uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-background border border-border px-3.5 py-1.5 rounded-full text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
