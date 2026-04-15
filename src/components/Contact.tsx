import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Mobil", value: "+46 73 513 17 62", href: "tel:+46735131762" },
  { icon: Mail, label: "E-post", value: "samconsultingab@outlook.com", href: "mailto:samconsultingab@outlook.com" },
  { icon: MapPin, label: "Adress", value: "Spolegatan 10C, 222 20 Lund", href: "https://www.google.com/maps/search/?api=1&query=Spolegatan+10C+222+20+Lund+Sverige" },
  { icon: Linkedin, label: "LinkedIn", value: "Milad Yarahmadi", href: "https://www.linkedin.com/in/milad-yarahmadi-342a0259/" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
          Kom igång
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-tight mb-4">
          Kontakta oss
        </h2>
        <p className="text-muted-foreground mb-16 max-w-md">
          Vi ser fram emot att höra från dig. Hör av dig för att diskutera hur vi kan hjälpa er organisation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactInfo.map((info) => {
            const Wrapper = info.href ? "a" : "div";
            return (
              <Wrapper
                key={info.label}
                {...(info.href ? { href: info.href, target: info.href.startsWith("http") ? "_blank" : undefined, rel: info.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                className="flex items-start gap-4 bg-background border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <info.icon size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium">{info.value}</p>
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
