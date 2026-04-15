import { Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
          Teamet
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold tracking-tight mb-16">
          Konsulter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <div className="w-32 h-32 rounded-2xl bg-accent flex items-center justify-center text-3xl font-heading font-semibold text-foreground/60">
              MY
            </div>
            <h3 className="text-xl font-heading font-semibold mt-6">
              Milad Yarahmadi
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Data Analytics Manager & Subject Matter Expert
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
              Milad bidrar med ett öppet sinne och ett ödmjukt förhållningssätt där verksamheten alltid sätts i centrum. Han tror på människor och finner stor personlig tillfredsställelse i att coacha och se dem växa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hans mångsidiga yrkeserfarenhet ger en bred förståelse tvärs industrier och roller. Med bakgrund som Head of Data Analytics & AI, Lead Data Scientist och Senior Analyst inom medtech, e-handel, finans och supply chain bär han på djup kunskap.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Analytics Leadership", "E-handel", "Finans", "Medtech", "Supply Chain"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-accent px-3 py-1.5 rounded-full font-medium text-foreground/70"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <a
              href="/Milad%20CV.pdf"
              className="inline-block mt-4 text-sm font-medium border border-foreground/20 px-6 py-2.5 rounded-full hover:bg-accent transition-colors"
            >
              Ladda ner CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
