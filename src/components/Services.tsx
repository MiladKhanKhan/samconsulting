import { BarChart3, Brain, LineChart, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [BarChart3, Brain, LineChart, Users];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-brand mb-3">
          {t.services.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-tight mb-16">
          {t.services.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[i] ?? BarChart3;
            return (
              <div
                key={service.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-tint flex items-center justify-center mb-6">
                  <Icon size={22} className="text-brand" />
                </div>
                <p className="text-xs font-medium tracking-widest uppercase text-brand mb-2">
                  {service.tag}
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
