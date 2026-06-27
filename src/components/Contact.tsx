import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: Phone, label: t.contact.labels.mobil, value: "+46 73 513 17 62", href: "tel:+46735131762" },
    { icon: Mail, label: t.contact.labels.epost, value: "samconsultingab@outlook.com", href: "mailto:samconsultingab@outlook.com" },
    { icon: MapPin, label: t.contact.labels.adress, value: "The Ground c/o\nBredgatan 4, 211 30 Malmö", href: "https://www.google.com/maps/search/?api=1&query=Bredgatan+4+211+30+Malm%C3%B6+Sverige" },
    { icon: Linkedin, label: t.contact.labels.linkedin, value: "Milad Yarahmadi", href: "https://www.linkedin.com/in/milad-yarahmadi-342a0259/" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-brand mb-3">
          {t.contact.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-tight mb-4">
          {t.contact.heading}
        </h2>
        <p className="text-muted-foreground mb-16 max-w-md">
          {t.contact.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactInfo.map((info) => {
            const Wrapper = info.href ? "a" : "div";
            return (
              <Wrapper
                key={info.label}
                {...(info.href ? { href: info.href, target: info.href.startsWith("http") ? "_blank" : undefined, rel: info.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                className="flex items-start gap-4 bg-background border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-tint flex items-center justify-center flex-shrink-0">
                  <info.icon size={18} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium whitespace-pre-line">{info.value}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
