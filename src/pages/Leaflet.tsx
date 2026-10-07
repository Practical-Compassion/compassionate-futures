import { ArrowLeft, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const leafletPdf = "/__l5e/assets-v1/1d2aa887-f626-4bd3-ae1d-82fa0ab66102/PCDC_Leaflet.pdf";
import page1 from "@/assets/pcdc-leaflet-page-1.jpg.asset.json";
import page2 from "@/assets/pcdc-leaflet-page-2.jpg.asset.json";

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-foreground leading-relaxed mb-4">{children}</p>
);
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border-t border-border pt-10 mt-10">
    <h2 className="text-2xl font-display font-bold text-foreground mb-6">{title}</h2>
    {children}
  </section>
);

const Leaflet = () => (
  <>
    <header className="bg-primary text-primary-foreground px-6 py-5 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm hover:opacity-80 transition-opacity"><ArrowLeft className="w-4 h-4" /> Back to Home</Link>
        <a href={leafletPdf} download="PCDC_Leaflet.pdf" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2 rounded-lg font-body font-semibold text-sm hover:brightness-110 transition-all"><Download className="w-4 h-4" /> Download Leaflet (PDF)</a>
      </div>
    </header>
    <article className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-secondary font-body text-sm uppercase tracking-widest mb-2">Our Leaflet</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">PCDC Information Leaflet</h1>
          <p className="text-muted-foreground font-body">Practical Compassion for Destitute Children — Registered Charity No. 1076588</p>
        </div>

        <Paragraph>Our new leaflet sums up who we are, what we do and how you can support our work with destitute children in the Holy Land. You can read it below — or download it to print and share with friends, your church or your group.</Paragraph>

        <section className="mt-8 space-y-8">
          <figure>
            <img src={page1.url} alt="PCDC leaflet — outside panels" className="w-full rounded-lg border border-border shadow-sm" />
            <figcaption className="text-center text-muted-foreground font-body text-sm mt-2">Outside of the leaflet</figcaption>
          </figure>
          <figure>
            <img src={page2.url} alt="PCDC leaflet — inside panels" className="w-full rounded-lg border border-border shadow-sm" />
            <figcaption className="text-center text-muted-foreground font-body text-sm mt-2">Inside of the leaflet</figcaption>
          </figure>
        </section>

        <Section title="Who We Are">
          <Paragraph>We are a dedicated charity with over 30 years' experience working in Palestine and the Holy Land. We are uniquely grounded in a profound, first-hand understanding of the land and the challenges faced by its children.</Paragraph>
          <Paragraph>We serve children and vulnerable young people of all faiths, seeking to alleviate adversity, advance education, and respond to individual needs through tailored funding, prayer, and practical support.</Paragraph>
        </Section>

        <Section title="What We Do">
          <ul className="space-y-4 font-body text-foreground">
            {[
              ["Education Funding", "Support towards school fees to ensure access to education and improved opportunities."],
              ["Crisis & Destitution Support", "Dedicated help for children facing extreme adversity."],
              ["Medical Provision", "Emergency assistance for doctors' bills, treatment, and ongoing healthcare for children facing serious illness or disability."],
              ["Holistic & Practical Care", "Tailored relief providing essential aid such as food, clothing, and household needs, paired with prayer and personal encouragement."]
            ].map(([title, body]) => (
              <li key={title} className="border-l-4 border-secondary bg-background px-5 py-4">
                <p className="font-semibold mb-1">{title}</p>
                <p className="text-sm text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="How You Can Support Us">
          <Paragraph>We'd love your support, and there are three key ways you can help. We believe in the power of prayer — please pray for our children and the work we do. Please consider making a one-off donation or supporting us monthly via direct debit. Or volunteer with us: we would love creative, committed people to help continue our work and strengthen our future.</Paragraph>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {["Pray", "Donate", "Volunteer"].map((w) => (
              <div key={w} className="bg-background border border-border rounded-lg py-6 text-center font-display text-lg font-bold text-primary">{w}</div>
            ))}
          </div>
        </Section>

        <Section title="Contact & Donations">
          <div className="bg-background border border-border p-6 font-body text-sm space-y-3">
            {[
              ["Email", "james@pcdcuk.com"],
              ["Website", "pcdcuk.com"],
              ["Account name", "Practical Compassion for Destitute Children"],
              ["Account No.", "40165948"],
              ["Sort code", "20-62-09"],
              ["Reference", "Your name"]
            ].map(([label, value]) => <div key={label} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-2"><span className="font-semibold text-muted-foreground">{label}:</span><span className="text-foreground">{value}</span></div>)}
          </div>
          <a href="mailto:james@pcdcuk.com" className="inline-flex items-center gap-2 text-primary font-body underline mt-6"><Mail className="w-4 h-4" /> Contact us — we'd love to hear from you</a>
        </Section>

        <div className="mt-12 border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4">
          <div><p className="font-body text-muted-foreground text-sm mb-1">Also read</p><Link to="/newsletter" className="font-body font-semibold text-primary underline">Our latest newsletter</Link></div>
          <a href={leafletPdf} download="PCDC_Leaflet.pdf" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-body font-semibold hover:brightness-110 transition-all"><Download className="w-4 h-4" /> Download Leaflet (PDF)</a>
        </div>
      </div>
    </article>
  </>
);

export default Leaflet;
