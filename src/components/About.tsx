import { Linkedin, Download } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-brand mb-3">
          {t.about.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-tight mb-16">
          {t.about.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <div className="w-32 h-32 rounded-2xl overflow-hidden">
              <img
                src="/milad-portrait.png"
                alt="Milad Yarahmadi"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-heading font-semibold mt-6">
              Milad Yarahmadi
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {t.about.role}
            </p>
            <a
              href="https://www.linkedin.com/in/milad-yarahmadi-342a0259/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium mt-4 hover:text-foreground text-muted-foreground transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {t.about.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-accent px-3 py-1.5 rounded-full font-medium text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="/Milad-CV.pdf"
              download="Milad-CV.pdf"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium border border-foreground/20 px-6 py-2.5 rounded-full hover:bg-accent transition-colors"
            >
              <Download size={16} />
              {t.about.cv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
