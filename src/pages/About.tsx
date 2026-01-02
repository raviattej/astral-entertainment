import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Shield,
  Users,
  Lightbulb,
  Eye,
  Handshake,
  Gem,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import aboutTeam from "@/assets/about-team.jpg";
import heroEvents from "@/assets/hero-events.jpg";

const values = [
  {
    icon: Gem,
    title: "Excellence",
    description:
      "We pursue perfection in every detail, delivering services that consistently exceed expectations.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Our love for what we do drives us to create memorable experiences and pristine environments.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Count on us to deliver consistent quality, on time, every time—no exceptions.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "Transparency and honesty form the foundation of every client relationship we build.",
  },
];

const approach = [
  {
    icon: Users,
    title: "Client-First Strategy",
    description:
      "Your vision drives everything we do. We listen, understand, and tailor our services to your unique needs.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication and honest pricing. You'll always know exactly what to expect.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing cutting-edge techniques and technologies to deliver superior results.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every project is measured by the smiles we create and the standards we uphold.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutTeam}
            alt="Astral team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              The Story Behind{" "}
              <span className="text-gradient-gold">Astral</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              From humble beginnings to becoming Australia's trusted name in
              event management and professional cleaning, our journey is defined
              by passion, perseverance, and an unwavering commitment to
              excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-gradient-section overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Who We Are"
                title="Two Pillars, One Vision"
                centered={false}
              />
              <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Astral Entertainment was born from a simple belief: that
                  exceptional service should be the standard, not the exception.
                  Founded in Sydney, we've grown to become a full-service
                  provider specializing in both event management and
                  professional cleaning services.
                </p>
                <p>
                  Our event management division creates spectacular celebrations
                  and corporate gatherings that leave lasting impressions. From
                  intimate weddings to large-scale conferences, we handle every
                  detail with precision and creativity.
                </p>
                <p>
                  Our cleaning division maintains the highest standards of
                  cleanliness across commercial and residential spaces. We
                  understand that a pristine environment sets the stage for
                  success—whether it's before an event or in your everyday
                  workplace.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroEvents}
                  alt="Elegant event setup"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            subtitle="These core values guide every decision we make and every service we deliver."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-gradient-card border border-border hover:border-gold/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-gradient-section overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-8">
                {approach.map((item, index) => (
                  <FeatureCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <SectionHeading
                badge="Our Approach"
                title="How We Work"
                subtitle="Our methodology combines creativity with precision, ensuring exceptional outcomes every time."
                centered={false}
              />
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                We believe that great service starts with understanding. Before
                we begin any project, we take the time to truly understand your
                vision, requirements, and expectations.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                From there, our expert teams craft tailored solutions that not
                only meet your needs but exceed them. Every step is transparent,
                every detail is considered, and every outcome is extraordinary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card border border-border rounded-2xl p-10 md:p-16 text-center shadow-elevated"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Experience the{" "}
              <span className="text-gradient-gold">Astral Difference?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              Whether you're planning an event or need professional cleaning
              services, we're here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gold" size="rXL">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="rXL">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
