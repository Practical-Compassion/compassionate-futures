import { useState } from "react";
import { Mail, Send } from "lucide-react";

const CONTACT_EMAIL = "james@pcdcuk.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || "Message from PCDC Website")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">Get in Touch</h1>
          <p className="text-lg font-body font-light opacity-90">
            We'd love to hear from you. Reach out with questions, prayer requests, or to learn more about supporting children in Palestine.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-body text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-body text-sm font-semibold text-foreground mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-body text-sm font-semibold text-foreground mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                maxLength={200}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="How can I help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                maxLength={2000}
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                placeholder="Write your message here…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-body font-semibold text-lg hover:brightness-110 transition-all"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>

            <p className="text-sm text-muted-foreground font-body">
              This will open your email client. You can also email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-semibold hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
