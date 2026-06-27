import { Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-brand mb-3">
          {t.testimonials.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-tight mb-16">
          {t.testimonials.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.testimonials.items.map((item, i) => (
            <figure
              key={i}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col"
            >
              <Quote size={28} className="text-brand mb-5" />
              <blockquote className="text-lg leading-relaxed text-foreground/90 flex-1">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-muted-foreground">
                — {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
