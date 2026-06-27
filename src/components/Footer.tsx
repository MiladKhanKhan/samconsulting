import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-border px-6 pt-16 pb-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-heading text-lg font-semibold">
              <span className="font-light">SAM</span>Consulting AB
            </p>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-brand mb-4">
              {t.footer.linksHeading}
            </p>
            <ul className="space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-brand mb-4">
              {t.nav.contact}
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:samconsultingab@outlook.com"
                  className="text-muted-foreground hover:text-brand transition-colors break-all"
                >
                  samconsultingab@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+46735131762"
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  +46 73 513 17 62
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/milad-yarahmadi-342a0259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SAMConsulting AB. {t.footer.rights}</p>
          <p>
            {t.footer.seat} · {t.footer.orgnr}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
