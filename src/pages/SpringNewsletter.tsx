import { ArrowLeft, Download, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import newsletterImg from "@/assets/newsletter-header-spring2026.jpg";

const Newsletter = () => (
  <>
    {/* Header */}
    <header className="bg-primary text-primary-foreground section-padding py-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <a
          href="/newsletters/PCDC_Newsletter_March_2026.pdf"
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
            Early Spring Newsletter 2026
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
            Most people I meet are feeling wearied by this long, grey winter. I cannot remember a new year bringing so many days of rain, wind and cold. And here in the North East we have fared better than many other parts of the country. Meanwhile we turn on the television news, or reach for a newspaper, and are made instantly and vividly aware of what life is like in the Middle East, or Ukraine, or many other parts of the world.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            At least we can do something! I feel on the one hand that we know we are doing something through the work of PCDC, though it sometimes feels like a drop in the ocean. And together we are making a difference to one young life after another. It was so gratifying to see our contributions increasing rather than decreasing in 2025. Thank you so much for that!
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            On the other hand, seeing how life has become more precarious than ever for some of our Palestinian families leaves me longing for a sort of springtime, a time of new hope and stability for the families and for the schools. When parents have been unable to get to work for months, their income simply vanishes. When tourists and pilgrims have been unable to visit Palestine, the shops and cafes they would have been patronising simply stay shut.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">Our 30th Birthday</h2>
          <p className="text-foreground font-body leading-relaxed mb-4">
            PCDC came to life during 1996. There was not an official launch, just a gradual development during that year of the work which has been going on ever since. We are going to celebrate that landmark sometime next spring/early summer with a Party to which you will be invited! We hope the date for the party can be agreed in the next week or two. At present, we are considering Saturday afternoons in June.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">Palestine on the Alert</h2>
          <p className="text-foreground font-body leading-relaxed mb-4">
            While we wait anxiously to see whether the fragile cease-fire will hold in Gaza and the long process of rebuilding will begin, the situation in Palestine has in some ways grown more tense. We continue to hear about the advance of the settlers, and the way we shall observe our 30th birthday will be by compiling and publishing a commemorative booklet, including a short history of PCDC, and reflections on what has been happening down the years from those in the UK and in Palestine. If you have stories, memories or impressions I shall be delighted to receive them in the next few weeks. We are not looking for long essays, just anecdotes and memories.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            The booklet will be printed and distributed quite separately from our main funds, which will continue to be dedicated 100% for the assistance of destitute children in Palestine. We give thanks that God continues to bless our work and the children who are enabled through it to learn and grow.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            I hope that this Newsletter will give you hope and encouragement that the work of PCDC is keeping going amidst all the challenges.
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
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Malcolm Writes About the Meaning of 'Destitution' in Our Name</h2>
          <p className="text-muted-foreground font-body italic mb-6">Dear Friends,</p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            PCDC is a servant charity, not a political organization. We know that children everywhere deserve to grow up in safety, dignity, and freedom. The United Nations Convention on the Rights of the Child (UNCRC) sets out the fundamental rights that all children should enjoy, regardless of nationality, ethnicity, or circumstance. These standards are recognised worldwide, yet their observance varies between countries. While many nations strive to uphold the UNCRC, children in certain areas, including Israel and the occupied Palestinian territories, continue to face severe violations of their rights.
          </p>

          <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">UN-Recognised Children's Rights</h3>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-foreground font-body font-semibold mb-1">1. The right to life, survival, and development.</p>
              <p className="text-foreground font-body leading-relaxed">
                Many children in Palestine have lost their lives in the last few years of conflict. In the area where PCDC works, this has not affected so many children, but many children who we know have lost their freedom to travel about, even in their own city, and have been denied all kinds of possibility of full development of their skills and needs.
              </p>
            </div>
            <div>
              <p className="text-foreground font-body font-semibold mb-1">2. The right to safety from harm and abuse.</p>
              <p className="text-foreground font-body leading-relaxed">
                Everyone has the right to be protected from violence, abuse, and neglect, but this right has often been ignored. Violence is widespread; even older teenagers can feel unsafe walking outside. Children we know have been threatened by soldiers who broke into their home at night and threatened them with firearms.
              </p>
            </div>
            <div>
              <p className="text-foreground font-body font-semibold mb-1">3. The right to education.</p>
              <p className="text-foreground font-body leading-relaxed">
                In Palestine the government schools cost less to attend but there are many problems. Huge classes (average 75 children per class) mean that children with special needs cannot be attended to. Christian and other private schools offer small classes (average 15 per class) with maximum attention to the needs of each child. PCDC works in 17 different schools and the education of children is our priority. We cover school fees for 170 children, in part or completely, according to each child's needs. Our annual budget for this is around £120,000.
              </p>
            </div>
            <div>
              <p className="text-foreground font-body font-semibold mb-1">4. The right to health and healthcare.</p>
              <p className="text-foreground font-body leading-relaxed">
                Every child has a right to healthcare. In Palestine there has been much improvement, and the doctors and hospitals are doing the best they can. But they are often underequipped, and the doctors lack up-to-date training. PCDC will try to help any child who is unable to pay for medical help.
              </p>
            </div>
            <div>
              <p className="text-foreground font-body font-semibold mb-1">6. The right to play and leisure.</p>
              <p className="text-foreground font-body leading-relaxed">
                Access to play, leisure, and a safe family environment is frequently disrupted by ongoing conflict. In Bethlehem there is only one playground for children. PCDC helped to repair unsafe equipment in this playground some years ago.
              </p>
            </div>
            <div>
              <p className="text-foreground font-body font-semibold mb-1">7. The right to family life and parental care.</p>
              <p className="text-foreground font-body leading-relaxed">
                Every child should have the ability to live with parents or other family members. There are too many children wandering in the streets. One child we know (aged 13) asked the police for permission to commit a crime so that he could spend a night in a cell, rather than in the street where he usually slept. PCDC was able to move him into a residential school.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">The Role of PCDC</h3>
          <p className="text-foreground font-body leading-relaxed mb-4">
            PCDC is dedicated to defending and promoting the rights of children in Palestine. We work to support affected families, and our efforts focus especially on safeguarding children from violence, ensuring access to education and healthcare, and upholding the right to family life. By raising awareness, PCDC strives to ensure that children receive the protections they are entitled to under international law.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Protecting children's rights is a universal responsibility. The ongoing challenges faced by children in Palestine highlight the urgent need for global solidarity and action. By supporting organisations like PCDC, we can help children, regardless of where they live, to enjoy the rights and dignity they deserve. This is why we define Destitution as the denial to children of their rights.
          </p>
        </section>

        <div className="border-t border-border my-10" />

        {/* Jasmine's Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Jasmine's Story</h2>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Sometimes God leads us in funny ways. When we are working in Bethlehem, we tend to travel in local taxis. These are not private taxis, but run along a route like buses do, and they are very quick and cheap, and will stop anywhere you ask them to. They are called service taxis and can take up to 12 passengers. On one trip we heard people talking in the town and the taxis about this young woman who had developed a kind of a cist which needed treating.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            She was expecting her first son. She and her husband already had several daughters. They were looking forward to the little boy. The cist was a very small procedure. She went into the local hospital. They gave her an injection. Sadly, they gave her the wrong one. Within a few hours, she was dead. The little boy she was bearing also died. The family was broken in despair.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            We felt God was calling us to go and minister to that family, if there was any way we could lighten the terrible burden that had come to them so suddenly. The father was beside himself in grief, and all the girls were stunned in unbelief at what had happened to their mother. The youngest girl, who was 5 years old, asked us when her Mummy would be coming back. We often carry trauma bears with us, and we had one, which we offered to Jasmine (not her real name) as a comfort.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            There would be the problem of school fees. Father was unemployed, soon to start a modest job at an Israeli supermarket. It wouldn't cover the girls' school fees. We made a plan: PCDC would pay half the school fees and Father John would help us to pay the other half. Meanwhile, the sister to be confirmed next day wanted to tell us about the confirmation, because she had been asked to do a Bible reading in the church, and she had been practising it, and wanted us to watch.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            Sometimes, when we help families, it is for a long haul, but worth it, thanks to all our supporters. We are so grateful to you for making this ministry possible over many years.
          </p>
          <p className="text-foreground font-body font-semibold">Malcolm Jones</p>
          <p className="text-muted-foreground font-body text-sm mt-1">
            The Revd Malcolm Jones is a founding trustee of PCDC. Contact: malcolmjonespcdc@hotmail.com or 07743 546 180
          </p>
        </section>

        <div className="border-t border-border my-10" />

        {/* Middle East Situation */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">What on Earth Are We to Make of the Present Situation in the Middle East?</h2>
          <p className="text-foreground font-body leading-relaxed mb-4">
            The first thing to say is that for the present generation of Palestinian children this is their first experience of full-on war. Children now are experiencing the deafening and terrifying sound of drones and ballistic missiles either flying over or crashing into buildings. Every school is closed at present; roads are closed and many new checkpoints have been set up. It is dangerous to be out of doors, so everyone is confined to their houses.
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4 italic border-l-4 border-secondary pl-4">
            'All the roads to and from Bethlehem have been closed. The sirens around us are sounding constantly. We do not know what is happening. We are only trying to reassure our children, who are innocent and have never seen a truly beautiful day.'
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4 italic border-l-4 border-secondary pl-4">
            'While the events of the last three years have been disruptive to our school, the violence that has erupted over the last few days is right in front of us day and night – threatening the welfare, and potentially the lives, of our children, their families and the school staff.'
          </p>
          <p className="text-foreground font-body leading-relaxed mb-4">
            If you have a question about our activities and policies in PCDC, please don't hesitate to ask. We will be happy to provide answers and explanations either personally or in future Newsletters. Similarly, please be in touch if you have suggestions about how our work could be developed.
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
