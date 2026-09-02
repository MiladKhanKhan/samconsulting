# SAMConsulting – ändrade filer

Kopiera dessa filer rakt över dina befintliga (samma sökvägar), commit:a och pusha.

## Ändrade filer
- index.html                    → lade till <link rel="canonical">
- public/robots.txt             → lade till Sitemap-rad
- public/sitemap.xml            → NY fil
- public/favicon.ico            → NY fil (riktig multi-size ikon från din SC-logga)
- src/components/Contact.tsx    → mejl: milad@samconsultingab.se
- src/components/Footer.tsx     → mejl: milad@samconsultingab.se
- src/i18n/translations.ts      → org.nr: 559501-6444 (sv + en)

## Commit
git add index.html public/robots.txt public/sitemap.xml public/favicon.ico src/components/Contact.tsx src/components/Footer.tsx src/i18n/translations.ts
git commit -m "Update email + org number, fix favicon.ico, add canonical + sitemap"
git push
