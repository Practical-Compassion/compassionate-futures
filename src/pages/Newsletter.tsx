import { ArrowLeft, Download, Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const junePdf = "/__l5e/assets-v1/95875d02-d9c7-443e-a072-652b4987748c/PCDC_Newsletter_June_26.pdf";
const logo = "/__l5e/assets-v1/3cde9f25-19e8-40c4-8a8f-f93f5365c786/pcdc-newsletter-logo.jpg";

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-foreground leading-relaxed mb-4">{children}</p>
);
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border-t border-border pt-10 mt-10">
    <h2 className="text-2xl font-display font-bold text-foreground mb-6">{title}</h2>
    {children}
  </section>
);

const Newsletter = () => (
  <>
    <header className="bg-primary text-primary-foreground px-6 py-5 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm hover:opacity-80 transition-opacity"><ArrowLeft className="w-4 h-4" /> Back to Home</Link>
        <a href={junePdf} download="PCDC_Newsletter_June_26.pdf" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2 rounded-lg font-body font-semibold text-sm hover:brightness-110 transition-all"><Download className="w-4 h-4" /> Download Newsletter</a>
      </div>
    </header>
    <article className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <img src={logo} alt="PCDC logo" className="w-20 h-20 object-contain mx-auto mb-5" />
          <p className="text-secondary font-body text-sm uppercase tracking-widest mb-2">Newsletter</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Summer Newsletter 2026</h1>
          <p className="text-muted-foreground font-body">Practical Compassion for Destitute Children — Registered Charity No. 1076588</p>
        </div>

        <section>
          <p className="text-muted-foreground font-body italic mb-6">Dear Friends,</p>
          <div className="border-l-4 border-secondary bg-background px-6 py-6 mb-8">
            <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">PCDC’s 30th Birthday</p>
            <p className="font-body font-semibold text-foreground mb-2">Saturday 1 August 2026 · 2.30pm to 4.00pm</p>
            <p className="font-body text-foreground">St Nicholas Church Annexe, Gosforth</p>
            <p className="font-body text-muted-foreground text-sm mb-3">Wardle Street, next to South Gosforth Metro · Ample parking on site</p>
            <p className="font-body text-foreground mb-3">News, refreshments, a display of pictures, and a chance to meet the Trustees and one another.</p>
            <p className="font-body text-foreground font-semibold">RSVP by 25 July: <a className="underline" href="mailto:collis.rick@gmail.com">collis.rick@gmail.com</a> or <a className="underline" href="tel:+447597933367">07597 933 367</a></p>
          </div>
          <Paragraph>It feels so good to be approaching our 30th birthday! Thirty years since Malcolm Jones began to formalise the work he had been developing with schools and families in Palestine. Malcolm had already been making regular visits with friends and helpers, and there are some who are still with us.</Paragraph>
          <h3 className="text-xl font-display font-bold text-foreground mt-7 mb-3">And yet …</h3>
          <Paragraph>How times have changed since those early days! We are still in the longest period of not being able to make regular visits to the families and schools we support, because of continuing unrest in the Middle East. At the time of writing, the Foreign and Commonwealth Office advises against travel to Palestine, making travel insurance impossible to obtain. But technology now lets us stay in direct contact with everyone in Palestine. The basics have not changed: we seek to give support and hope to children and families through financial grants, mainly for education.</Paragraph>
          <h3 className="text-xl font-display font-bold text-foreground mt-7 mb-3">Please join us on August 1st</h3>
          <Paragraph>Our birthday will be a chance to meet, look at pictures and share memories about the children we have supported. Please bring any pictures, letters and memories you have kept. We are working on a commemorative booklet, and ask you to reply by 25 July to help us plan refreshments. The cost of the celebration is not coming from income given for our core work.</Paragraph>
          <h3 className="text-xl font-display font-bold text-foreground mt-7 mb-3">Meanwhile, the work goes on</h3>
          <Paragraph>The situation in Palestine continues to be desperate. We still hear frequent reports of home demolitions, roadblocks and families struggling because people cannot get to work or have lost their jobs. Tourism and pilgrimage have almost disappeared. The schools are valiantly keeping open most of the time, keeping children occupied and engaged.</Paragraph>
          <Paragraph>At this landmark moment, I hope we might find one or two new Trustees to help with the work. Please get in touch if you would like to know more. In September we will begin allocating your generous gifts to children who would otherwise have a much more uncertain start in life. Thank you on behalf of the children and their families, and to my fellow Trustees and colleagues here and in Palestine.</Paragraph>
          <Paragraph>We hope to see a large gathering of PCDC friends and colleagues on August 1st!</Paragraph>
          <p className="font-body text-foreground">With my love and prayers,</p>
          <p className="font-body text-foreground font-semibold mt-2">Richard Hill</p>
          <p className="font-body text-muted-foreground text-sm mt-1">Canon Richard Hill is Chair of PCDC · 07597 933 367 · collis.rick@gmail.com</p>
        </section>

        <Section title="Our Founder’s Personal Reflection on 30 Years of PCDC">
          <Paragraph>This year, we celebrate 30 years of PCDC. The years have flown by, and, although challenging, I personally have enjoyed them very much. We have always had excellent trustees who have worked hard and been a pleasure to work with. I thank them and their predecessors for the quality of their faith and loyalty.</Paragraph>
          <Paragraph>One of the things I love most is the daily contact I have with children we helped long ago, who keep in touch now and again. It is wonderful to see how the foundations were laid when life was very uncertain, and how things are working out for them now.</Paragraph>
          <Paragraph>One of the most difficult periods was from 2000 to 2004, when the Intifada and military action caused widespread destruction and seriously disrupted children’s education. Many buildings were destroyed, lives were lost, and I feared that many children had been traumatised. We were able to visit homes, hospitals, schools, refugee camps and families left homeless, and everywhere we were received warmly. We shared people’s grief in homes damaged by conflict.</Paragraph>
          <Paragraph>These last few years of warfare have been similar in some ways, though this time we have not been allowed to visit. Day by day, messages from children, parents, teachers and head teachers keep us connected. I used to love receiving letters from children in the post; now we can stay in touch instantly.</Paragraph>
          <Paragraph>Many families have hoped to leave and settle elsewhere, escaping severe restrictions on travel and the threat of losing their homes. We hear from children and families building new lives across the world. Many have done well: among those we have helped are nurses, teachers, doctors, drivers, photographers and even a space engineer working at NASA.</Paragraph>
          <Paragraph>We know the life stories of some amazing young people who grew up with PCDC’s support. Thank you to everyone who has helped us do this work over 30 years, and thanks to God for hearing us when we have cried out on behalf of a child or family in distress. May He continue to bless them, us and you too.</Paragraph>
          <p className="font-body font-semibold text-foreground">Malcolm</p>
        </Section>

        <Section title="News from the Treasurer">
          <p className="font-body text-muted-foreground mb-5">Audited PCDC accounts · Financial year 1 September to 31 August</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full min-w-[320px] font-body text-sm text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 pr-3"> </th><th className="py-3 px-3">2024–25</th><th className="py-3 px-3">2023–24</th></tr></thead>
              <tbody>{[
                ["Income", "£130,495", "£112,661"], ["Expenditure", "£106,286", "£162,526"], ["Reserves", "£91,445", "£67,596"]
              ].map(([label, current, previous]) => <tr key={label} className="border-b border-border"><th scope="row" className="py-3 pr-3 font-semibold">{label}</th><td className="py-3 px-3">{current}</td><td className="py-3 px-3">{previous}</td></tr>)}</tbody>
            </table>
          </div>
          <Paragraph><strong>Total income since inception: £3,064,000.</strong> Income rose by around 16% in 2024–25, thanks to one-off gifts, while regular giving declined. Administration costs remain very low, so virtually all donations are distributed to those in need.</Paragraph>
          <Paragraph>In 2024–25, donations supported 15 schools and 150 children, as well as around 10 students in higher education or vocational training. Gift Aid adds significantly to our income. If you are able to use Gift Aid but do not yet, please get in touch.</Paragraph>
          <p className="font-body font-semibold text-foreground">Steve Sansom</p>
          <a href={junePdf} download="PCDC_Newsletter_June_26.pdf" className="inline-flex items-center gap-2 font-body text-primary underline mt-4"><Download className="w-4 h-4" /> See the full accounts breakdown in the PDF</a>
        </Section>

        <Section title="Jumana’s Story">
          <Paragraph>Every evening after school, Jumana would run across the playground to meet us. Her widowed mother worked as a cleaner and could not collect her until she finished. Jumana arrived with a bright smile, eager to talk and practise her English with us.</Paragraph>
          <Paragraph>We suggested that her mother take her to a dentist to care for her teeth. A kind dentist treated her, repaired her teeth and corrected her jaw. With that care came something even more important: confidence.</Paragraph>
          <Paragraph>Jumana came from a Muslim family with six children. After she moved to a government school, we lost contact for years. Then she called, not to ask for help, but to say hello and share the news that she was training to become a nurse. Later she passed her final exams, married, and went on to become a paramedic. She is believed to be the first woman ambulance driver in Palestine.</Paragraph>
          <Paragraph>Her life reminds us that a difficult beginning does not have to define a person’s future. Compassion, opportunity, courage and perseverance gave hope room to grow.</Paragraph>
          <p className="font-body font-semibold text-foreground">Malcolm Jones</p>
          <p className="font-body text-muted-foreground text-sm mt-1">Founding trustee · malcolmjonespcdc@hotmail.com · 07743 546 180</p>
        </Section>

        <Section title="Make a Donation by Bank Transfer">
          <div className="bg-background border border-border p-6 font-body text-sm space-y-3">
            {[ ["Bank", "Barclays"], ["Account name", "Practical Compassion for Destitute Children"], ["Account No.", "40165948"], ["Sort code", "20-62-09"], ["Reference", "Your surname"] ].map(([label, value]) => <div key={label} className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-2"><span className="font-semibold text-muted-foreground">{label}:</span><span className="text-foreground">{value}</span></div>)}
          </div>
          <p className="font-body text-muted-foreground text-sm mt-3">Please give the account name in full.</p>
        </Section>
        <Section title="The Last Word">
          <Paragraph>If you have a question about our activities and policies, please don’t hesitate to ask. We will be happy to provide answers, personally or in future newsletters. Please also be in touch if you have suggestions about how our work could develop.</Paragraph>
          <a href="mailto:james@pcdcuk.com" className="inline-flex items-center gap-2 text-primary font-body underline"><Mail className="w-4 h-4" /> Contact PCDC</a>
        </Section>
        <div className="mt-12 border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4">
          <div><p className="font-body text-muted-foreground text-sm mb-1">Previous issue</p><Link to="/newsletter/spring-2026" className="font-body font-semibold text-primary underline">Read the Early Spring 2026 newsletter</Link></div>
          <a href="https://www.justgiving.com/charity/practicalcompassionfordestitutechildren" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-body font-semibold hover:brightness-110 transition-all"><Heart className="w-4 h-4" /> Donate via JustGiving</a>
        </div>
      </div>
    </article>
  </>
);

export default Newsletter;
