import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionHeading from "@/components/ui/SectionHeading";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "2/3 Page St Kunda Park QLD 4556",
    subtitle: "Head Office",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+61 7 3472 6473",
    subtitle: "Mon - Sat, 9AM - 6PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@astral.net.au",
    subtitle: "We reply within 24 hours",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
    subtitle: "24/7 for urgent requests",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Let's Create Something{" "}
              <span className="text-gradient-gold">Amazing</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have a question or ready to start your next project? We'd love to
              hear from you. Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-section border-b border-border">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-gold/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <info.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="text-foreground/90 text-sm mb-1">{info.content}</p>
                <p className="text-muted-foreground text-xs">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Get in Touch"
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
                centered={false}
              />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-card border border-gold/30 rounded-xl p-10 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our team will review your
                    message and get back to you within 24 hours.
                  </p>
                  <Button
                    variant="goldOutline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="bg-card border-border focus:border-gold"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-card border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+61 4XX XXX XXX"
                        className="bg-card border-border focus:border-gold"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject *
                      </label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          setFormData({ ...formData, subject: value })
                        }
                        required
                      >
                        <SelectTrigger className="bg-card border-border focus:border-gold">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="event-inquiry">
                            Event Management Inquiry
                          </SelectItem>
                          <SelectItem value="cleaning-inquiry">
                            Cleaning Services Inquiry
                          </SelectItem>
                          <SelectItem value="quote-request">
                            Request a Quote
                          </SelectItem>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      required
                      className="bg-card border-border focus:border-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map / Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-gradient-card border border-border rounded-xl p-8 shadow-card">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Why Contact Astral?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free consultation and quote",
                    "Expert advice on event planning",
                    "Customized cleaning solutions",
                    "Flexible scheduling options",
                    "Competitive pricing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-card border border-border rounded-xl p-8 shadow-card">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  We understand the importance of timely communication. Our team
                  is committed to responding to all inquiries within 24 hours
                  during business days.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For urgent matters, please call us directly at{" "}
                  <span className="text-gold">+61 7 3472 6473</span>.
                </p>
              </div>

              <div className="bg-gold/5 border border-gold/30 rounded-xl p-8">
                <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                  Ready for a Quote?
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Use the contact form to describe your project, and our team
                  will provide you with a detailed, no-obligation quote tailored
                  to your specific needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
