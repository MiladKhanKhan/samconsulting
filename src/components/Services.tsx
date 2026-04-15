import { BarChart3, Brain, LineChart, Users } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Dataanalys",
    tag: "Insikter & Trender",
    description: "Vi identifierar värdefulla mönster och trender i din data, vilket möjliggör välgrundade beslut och strategisk tillväxt.",
  },
  {
    icon: Brain,
    title: "Prediktiv modellering",
    tag: "Machine Learning & AI",
    description: "Prognostisera framtida trender, identifiera risker och optimera möjligheter med avancerade ML-tekniker.",
  },
  {
    icon: LineChart,
    title: "Datavisualisering",
    tag: "Business Intelligence",
    description: "Komplexa datamängder förvandlas till övertygande dashboards och rapporter som gör det enkelt att kommunicera insikter.",
  },
  {
    icon: Users,
    title: "Ledarskap",
    tag: "Strategi & Affärsutveckling",
    description: "Vi stöttar organisationer med erfaret ledarskap och strategisk företagsledning – från operativa beslut till långsiktig tillväxt.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
          Vad vi gör
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-tight mb-16">
          Tjänster
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <service.icon size={22} className="text-foreground" />
              </div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
                {service.tag}
              </p>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
