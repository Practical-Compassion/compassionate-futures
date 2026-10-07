import { Mail } from "lucide-react";

const CONTACT_EMAIL = "james@pcdcuk.com";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">Get in Touch</h1>
          <p className="text-lg font-body font-light opacity-90">
            We'd love to hear from you. Reach out with questions, prayer requests, or to learn more about
            supporting children in Palestine.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Email us directly
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="block font-display font-bold text-primary break-words text-4xl sm:text-5xl md:text-6xl lg:text-7xl hover:underline underline-offset-8 decoration-2 transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-8 font-body text-base md:text-lg text-muted-foreground font-light">
            James Kenyon and the PCDC team will get back to you as soon as we can.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
