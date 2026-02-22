import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-children.jpg";
import { Heart, BookOpen, Stethoscope, HandHeart, ArrowRight } from "lucide-react";

const HeroSection = () =>
<section className="relative min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Children learning in a Palestinian school classroom" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>
    <div className="relative z-10 section-padding max-w-3xl">
      <p className="text-sand-light font-body text-sm uppercase tracking-[0.25em] mb-4 animate-fade-in-up">
        Practical Compassion for Destitute Children
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Every Child Deserves a Future Full of Hope
      </h1>
      <p className="text-lg md:text-xl text-sand-light/90 font-body font-light mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        Supporting children in crisis in Palestine through tailored education funding, prayer, and practical compassion.
      </p>
      <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
        



        <a href="#mission"
      className="inline-flex items-center gap-2 border-2 border-sand-light/40 text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-all">
          Learn More <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>;


const MissionSection = () =>
<section id="mission" className="section-padding bg-card">
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">Our Mission</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
        Relief for Children in Necessitous Circumstances
      </h2>
      <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
        For the relief of poverty, sickness, and distress and the advancement of education of children under 18 — or in exceptional circumstances young people up to 25 — who are resident in the lands of the Bible. We understand every child's unique needs, supporting them through difficulties with tailored funding, prayer, and practical help.
      </p>
    </div>
  </section>;


const helpAreas = [
{
  icon: BookOpen,
  title: "Education Sponsorship",
  description: "Children are sponsored with contributions towards Christian school fees, giving them access to quality education and increased opportunities to earn a good living."
},
{
  icon: Stethoscope,
  title: "Medical Provision",
  description: "In exceptional cases, medical provision is given to children facing health challenges, ensuring they receive the care they need to thrive."
},
{
  icon: HandHeart,
  title: "Crisis Support",
  description: "We focus on children in destitute need — those who have lost parents, been abandoned, or face family breakdown, illness, or disability."
}];


const HelpSection = () =>
<section className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">How We Help</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Compassion in Action
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {helpAreas.map((area) =>
      <div key={area.title} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <area.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{area.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{area.description}</p>
          </div>
      )}
      </div>
    </div>
  </section>;


const PayPalButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && (window as any).paypal) {
      containerRef.current.innerHTML = "";
      (window as any).paypal.HostedButtons({
        hostedButtonId: "ATHM9JN35LA8J"
      }).render(containerRef.current);
    }
  }, []);

  return <div ref={containerRef} />;
};

const CTASection = () =>
<section className="section-padding bg-primary text-primary-foreground">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
        Change a Child's Life Today
      </h2>
      <p className="text-lg font-body font-light opacity-90 mb-8 max-w-2xl mx-auto">
        Your contribution gives children in Palestine increased opportunities to earn a good living and serve their community. Every gift makes a difference.
      </p>
      <div className="flex flex-col items-center gap-6">
        <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
          <p className="text-sm font-body opacity-80 mb-4">Donate via PayPal</p>
          <PayPalButton />
        </div>
      </div>
    </div>
  </section>;


const Footer = () =>
<footer className="section-padding bg-foreground text-primary-foreground/70 py-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <p className="font-display font-semibold text-primary-foreground text-lg">PCDC</p>
        <p className="text-sm font-body">Practical Compassion for Destitute Children</p>
      </div>
      <p className="text-sm font-body">© {new Date().getFullYear()} PCDC. Registered Charity.</p>
    </div>
  </footer>;


const Index = () =>
<>
    <HeroSection />
    <MissionSection />
    <HelpSection />
    <CTASection />
    <Footer />
  </>;


export default Index;