const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm font-semibold">
          <span className="font-light">SAM</span>Consulting AB
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SAMConsulting AB. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
