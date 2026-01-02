import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  PartyPopper,
  Sparkles,
  Calendar,
  Music,
  Users,
  Mic,
  Utensils,
  Camera,
  Building2,
  Home,
  Briefcase,
  Trash2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroEvents from "@/assets/hero-events.jpg";
import heroCleaning from "@/assets/hero-cleaning.jpg";

const eventServices = [
  {
    icon: PartyPopper,
    title: "Corporate Events",
    description:
      "Professional conferences, galas, product launches, and team-building events tailored to your brand.",
  },
  {
    icon: Calendar,
    title: "Wedding Planning",
    description:
      "Full-service wedding coordination from intimate ceremonies to grand celebrations.",
  },
  {
    icon: Music,
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, and special celebrations designed to create lasting memories.",
  },
  {
    icon: Mic,
    title: "Entertainment Booking",
    description:
      "Access to top-tier performers, DJs, bands, and entertainment for any occasion.",
  },
  {
    icon: Utensils,
    title: "Catering Coordination",
    description:
      "Partnering with premium caterers to deliver exceptional culinary experiences.",
  },
  {
    icon: Camera,
    title: "Event Production",
    description:
      "Complete audio-visual, lighting, and staging solutions for unforgettable experiences.",
  },
];

const cleaningServices = [
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Comprehensive cleaning solutions for offices, retail spaces, and commercial properties.",
  },
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Regular home cleaning, deep cleaning, and move-in/move-out services.",
  },
  {
    icon: Briefcase,
    title: "Office Maintenance",
    description:
      "Daily, weekly, or monthly cleaning programs tailored to your workplace needs.",
  },
  {
    icon: Trash2,
    title: "Post-Event Cleanup",
    description:
      "Swift and thorough cleanup services after events of any scale.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Intensive cleaning services for carpets, upholstery, and hard-to-reach areas.",
  },
  {
    icon: Users,
    title: "Specialized Services",
    description:
      "Window cleaning, pressure washing, and industrial cleaning solutions.",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<"events" | "cleaning">("events");

  const tabs = [
    { id: "events", shortLabel: "Event", label: "Event Management", icon: PartyPopper },
    { id: "cleaning", shortLabel: "Cleaning", label: "Cleaning Services", icon: Sparkles },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              src={activeTab === "events" ? heroEvents : heroCleaning}
              alt="Services"
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Excellence in Every{" "}
              <span className="text-gradient-gold">Service</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              From spectacular events to spotless spaces, Astral Entertainment
              delivers premium services that exceed expectations. Explore our
              comprehensive offerings below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-y border-border">
        <div className="container-custom">
          <div className="flex justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-5 font-medium transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? "text-gold border-gold"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="inline sm:hidden">{tab.shortLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {activeTab === "events" ? (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <SectionHeading
                  badge="Events"
                  title="Event Management Services"
                  subtitle="Creating unforgettable experiences from concept to execution. Let us bring your vision to life."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventServices.map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="cleaning"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <SectionHeading
                  badge="Cleaning"
                  title="Professional Cleaning Services"
                  subtitle="Maintaining pristine spaces with precision and care. Experience the difference of professional cleaning."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cleaningServices.map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            subtitle="A streamlined approach that ensures exceptional results every time."
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with a detailed discussion to understand your needs and vision.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Our team crafts a customized plan tailored to your specific requirements.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Professional implementation with attention to every detail.",
              },
              {
                step: "04",
                title: "Follow-Up",
                description:
                  "We ensure your complete satisfaction with our services.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="text-6xl font-heading font-bold text-gold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 text-gold/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card border border-border rounded-2xl p-10 md:p-16 text-center shadow-elevated"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Get <span className="text-gradient-gold">Started?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's discuss
              how we can help with your next event or cleaning project.
            </p>
            <Button asChild variant="gold" size="rXL">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
