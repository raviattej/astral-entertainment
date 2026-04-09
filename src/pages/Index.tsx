import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PartyPopper,
  Sparkles,
  Calendar,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import FeatureCard from "@/components/ui/FeatureCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroEvents from "@/assets/hero-events.jpg";
import heroCleaning from "@/assets/hero-cleaning.jpg";

const servicePillars = [
  {
    icon: PartyPopper,
    title: "Event Management",
    description:
      "From intimate gatherings to grand celebrations, we craft unforgettable experiences that leave lasting impressions.",
  },
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    description:
      "Pristine spaces delivered with precision. Our cleaning services maintain the highest standards of excellence.",
  },
  {
    icon: Calendar,
    title: "Strategic Planning",
    description:
      "Meticulous attention to detail ensures every aspect of your event or service is planned to perfection.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Award-winning service backed by years of expertise and an unwavering commitment to excellence.",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our seasoned professionals bring years of experience and passion to every project.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description:
      "Recognized for excellence across Australia's event and cleaning industries.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock availability ensures we're always here when you need us most.",
  },
];

const stats = [
  { value: "500+", label: "Events Delivered" },
  { value: "1000+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

/** Ticketek — Sunil Grover show (direct link; avoids Google redirect wrapper). */
const BOOK_NOW_TICKETEK_URL =
  "https://premier.ticketek.com.au/Shows/Show.aspx?sh=SUNILGR26";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section — copy left, Sunil promo image right */}
      {/* <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-muted/25 to-background"> */}
      <section className="relative py-24 md:py-32 flex items-center overflow-hidden bg-gradient-to-b from-background via-muted/25 to-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_20%,hsl(var(--gold)_/_0.08),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_10%_80%,hsl(var(--gold)_/_0.06),transparent_50%)]" />

        <div className="container-custom relative z-10 w-full pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-10 xl:gap-14">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
              className="relative w-full lg:col-span-3"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gold/50 bg-muted/30 shadow-[0_0_40px_0_rgba(217,165,32,0.6)]">
                <img
                  src="/assets/images/sunil-sm.webp"
                  alt="Sunil Grover — promotional artwork for the live Australia tour"
                  className="h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/10" />
              </div>
              <div
                className="pointer-events-none absolute -inset-px -z-10 rounded-[1rem] bg-gradient-to-br from-gold/25 via-transparent to-gold/10 blur-sm"
                aria-hidden
              />
            </motion.div>

            <div className="text-left lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                  Astral Entertainment · Live on Tour
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-5 font-heading text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl"
              >
                Sunil Grover{" "} <br />
                <span className="text-gradient-gold">Live in Australia</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                A night of sharp wit, unforgettable characters, and world-class
                entertainment—presented by Astral Entertainment. Reserve your
                seats before they sell out.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mb-10 text-sm text-muted-foreground/90 sm:text-base hidden sm:block"
              >
                Australia’s trusted partner for standout events and pristine
                venues—now bringing this headline show to you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Button asChild variant="hero" className="px-10">
                  <a
                    href={BOOK_NOW_TICKETEK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                {/* <Button asChild variant="heroOutline">
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button> */}
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
                About Astral
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Crafting Excellence in Every Detail
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                At Astral Entertainment, we believe in turning visions into
                reality. With over years of experience in Australia's events
                and cleaning industry, we've established ourselves as the go-to
                partner for those who demand nothing but the best.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                Our dual expertise in event management and professional cleaning
                makes us uniquely positioned to handle every aspect of your
                venue's needs—from creating spectacular events to maintaining
                pristine spaces.
              </p>
              <Button asChild variant="goldOutline">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroCleaning}
                  alt="Professional cleaning service"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 left-[25%] sm:-left-8 bg-card border border-border rounded-xl p-4 sm:p-6 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-foreground">
                      4.9/5
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Client Rating
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="What We Do"
            title="Our Core Services"
            subtitle="From spectacular events to spotless spaces, we deliver excellence across every service we offer."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePillars.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-section border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                badge="Why Astral"
                title="Why Choose Us"
                subtitle="We're committed to delivering exceptional experiences that exceed your expectations."
                centered={false}
              />

              <div className="space-y-8">
                {whyChooseUs.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 shadow-elevated">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Our Commitment to You
                </h3>
                <ul className="space-y-4">
                  {[
                    "Personalized service tailored to your needs",
                    "Transparent pricing with no hidden fees",
                    "Eco-friendly cleaning solutions",
                    "Fully insured and certified team",
                    "Satisfaction guaranteed on every service",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 am:h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90 text-sm sm:text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroEvents}
            alt="Event backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Create Something{" "}
              <span className="text-gradient-gold">Extraordinary?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-10">
              Let's discuss how Astral Entertainment can bring your vision to
              life. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gold" size="rXL">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="rXL">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
