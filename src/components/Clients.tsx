import { useLanguage } from "@/i18n/LanguageContext";

const Clients = () => {
  const { t } = useLanguage();

  return (
    <section className="py-14 px-6 border-y border-border bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <p className="text-xs font-medium tracking-widest uppercase text-brand mb-6 text-center">
          {t.clients.eyebrow}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {t.clients.items.map((name) => (
            <span
              key={name}
              className="font-heading text-lg md:text-xl font-semibold text-foreground/35 hover:text-foreground/70 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
