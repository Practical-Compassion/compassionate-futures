import { ArrowLeft, Download, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import newsletterImg from "@/assets/newsletter-header.jpg";

const Newsletter = () => (
  <>
    {/* Header */}
    <header className="bg-primary text-primary-foreground section-padding py-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <a
          href="/newsletters/PCDC_Newsletter_Nov25-1.docx"
          download
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2 rounded-lg font-body font-semibold text-sm hover:brightness-110 transition-all"
        >
          <Download className="w-4 h-4" /> Download Newsletter
        </a>
      </div>
    </header>

    {/* Newsletter Content */}
    <article className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        {/* Title Block */}
        <div className="text-center mb-10">
          <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-2">Newsletter</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Early Winter Newsletter 2025
          </h1>
          <p className="text-muted-foreground font-body">
            Practical Compassion for Destitute Children — Registered Charity No. 1076588
          </p>
        </div>

        {/* Header Image */}
        <div className="rounded-xl overflow-hidden mb-10">
          <img src={newsletterImg} alt="PCDC Newsletter header" className="w-full object-cover" />
        </div>

        {/* Letter from Richard */}
        <section className="mb-12">
          <p className="text-muted-foreground font-body italic mb-6">Dear Friends,</p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Since our last Newsletter, we have had our busiest time of the year. The school year in Palestine begins in late August, when (as in the UK) children start school and those who were on the school roll until the summer move on to the next stage of their education, or seek their first job. With the help of the schools themselves, the trustees seek to identify the children most deserving of our support and formally agree the grants in our November meeting so that the schools can receive the money by the end of the year.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">Good News This Year</h2>
          <p className="text-foreground font-body leading-relaxed mb-4">
            We are very pleased to report that we were able this year to increase our grants to the children significantly. This is because the level of support from you – our friends and supporters – has been around 20% higher. It felt good to be able to give grants so much nearer what they were before last year's 'blip'! We have limited the number of new children we have taken on and tried to match the grants to the needs of each family, so far as we know them. Thank you all not only for your continued support, but in many cases for giving more. And thank you to those who have joined us, either with one-off gifts or more regular contributions.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">Our 30th Birthday</h2>
          <p className="text-foreground font-body leading-relaxed mb-4">
            PCDC came to life during 1996. There was not an official launch, just a gradual development during that year of the work which has been going on ever since. We are going to celebrate that landmark some time next spring/early summer with a party to which you will be invited! Please watch for further details in our next Newsletter early in the New Year.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Another way we shall observe reaching this point will be by compiling and publishing a commemorative booklet, including a short history of PCDC, and reflections on what has been happening down the years from those in the UK and in Palestine. Have you memories or impressions you would like to share? If you have, I shall be delighted to receive them in the next few weeks. We are not looking for long essays, just anecdotes and memories.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">Ongoing Challenges</h2>
          <p className="text-foreground font-body leading-relaxed mb-4">
            You have greatly encouraged us by this year's rise in our income. However, three of the four trustees are in their late 70s and early 80s and, if PCDC is to continue in its current form, we desperately need some younger trustees. If you are, or know of anyone who may be, interested to get involved with the charity in whatever capacity, please get in touch with me.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            I hope that this Newsletter will give you hope and encouragement that the work of PCDC is moving forward. Please share this with your friends, your church and with anyone who might like to support us. We give thanks that God continues to bless our work and the children who are enabled through it to learn and grow.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-1">With my love and prayers,</p>
          <p className="text-foreground font-body font-semibold">Richard Hill</p>
          <p className="text-muted-foreground font-body text-sm mt-1">
            Canon Richard Hill became Chair of PCDC in 2023. Contact: 07597 933 367 or collis.rick@gmail.com
          </p>
        </section>

        <div className="border-t border-border my-10" />

        {/* Malcolm's Update */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Malcolm's Update About Life in Palestine</h2>
          <p className="text-muted-foreground font-body italic mb-6">Dear Friends,</p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            So, there is a very fragile peace plan, thank God, for the people of Gaza. This is a most welcome and overdue step in the long history of conflict in the Middle East. Pray that it will last.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            People are always asking me how that will affect the people living in Bethlehem, or other parts of Palestine. The answer is that so far, it has made very little difference. Some things are better, and others are worse.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Please don't believe everything you hear. Believe what people see.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Sadly, we have heard inaccurate reports that prices for food are going down since the ceasefire was declared. However, eggs are £6 for 15, chicken costs anything up to £25 a kilo and petrol costs around £2 a litre. There is no sign that prices are coming down yet but we live in hope.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            What is worse is that the armed Israeli settlers are taking the law into their own hands, and raiding farms and homes in Palestine, causing great havoc, and sometimes killing people, without any punishment at all.
          </p>
        </section>

        <div className="border-t border-border my-10" />

        {/* Mariam's Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">The Story of Mariam</h2>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Mariam (not her real name) started school at Latin Patriarchate School in Beit Sahour, in September 2013. We visited the school and paid £114 to register her for school, a legal requirement, and then paid fees of £300 in October 2013.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Mariam was born in 2008 in Beit Sahour which is on the way to the Shepherds' Fields. She is of the Christian faith. Her father was generally not employed but occasionally had work as a cleaner of carpets and furniture. Mother qualified as a nurse. Mariam has an older sister and two younger brothers.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            PCDC called them to say that we would take full responsibility for the children's school-fees, and we also tried to find them a small flat to live in, where they would be safe and not overcharged. Mother's wages as a nurse were £156.25 a month. Rent is usually more than that. The family eventually settled in a small converted garage.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            When we visited this family in their home in 2013, we were received with great kindness and were impressed by the behaviour of the children. This family could not afford for their children to attend such a good school without help and we were delighted to give the two eldest children from this destitute family the opportunity to go to school.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Meanwhile, in the summer of 2025, at the age of 17, Mariam was offered a place on a school visit to France. There was no money to pay for this, so PCDC paid for part of the cost and we negotiated with the school and the French authorities to make it possible.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">Thank you for your help in support of this child and her family.</p>
          <p className="text-foreground font-body font-semibold">Malcolm Jones</p>
          <p className="text-muted-foreground font-body text-sm mt-1">
            The Revd Malcolm Jones is a founding trustee of PCDC. Contact: malcolmjonespcdc@hotmail.com or 07743 546 180
          </p>
        </section>

        <div className="border-t border-border my-10" />

        {/* Donation Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Make a Donation by Bank Transfer</h2>
          <div className="bg-background rounded-xl border border-border p-6 font-body text-sm space-y-2">
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-muted-foreground font-semibold">Bank:</span>
              <span className="text-foreground">Barclays</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-muted-foreground font-semibold">Account name:</span>
              <span className="text-foreground">Practical Compassion for Destitute Children</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-muted-foreground font-semibold">Account No.:</span>
              <span className="text-foreground">40165948</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-muted-foreground font-semibold">Sort code:</span>
              <span className="text-foreground">20-62-09</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-muted-foreground font-semibold">Reference:</span>
              <span className="text-foreground">Your surname</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-primary/5 rounded-xl p-8">
          <p className="text-foreground font-body mb-4">You can also donate online via JustGiving:</p>
          <a
            href="https://www.justgiving.com/charity/practicalcompassionfordestitutechildren"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-body font-semibold hover:brightness-110 transition-all"
          >
            <Heart className="w-5 h-5" /> Donate via JustGiving
          </a>
        </div>
      </div>
    </article>
  </>
);

export default Newsletter;
