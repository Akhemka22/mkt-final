import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://qahdjfmdubpdqqazfovl.supabase.co/functions/v1/send-contact-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent successfully");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-background texture-paper" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Contact Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-[1.15]">
              Let's Build Something <span className="text-gradient-brand italic pb-1 inline-block">Together</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
              Whether you're a brand looking for a reliable distribution partner or a retailer seeking quality garments,
              we'd love to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-gradient-brand flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Email</p>
                  <a
                    href="mailto:office@mktpvt.ltd"
                    className="text-foreground font-medium text-sm hover:text-primary transition-colors"
                  >
                    office@mktpvt.ltd
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-gradient-brand flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Phone</p>
                  <a
                    href="tel:+918334038247"
                    className="text-foreground font-medium text-sm hover:text-primary transition-colors"
                  >
                    +91 83340 38247
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-gradient-brand flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Head Office</p>
                  <p className="text-foreground font-medium text-sm">Barabazar, Kolkata</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-sm p-7 border border-border shadow-sm space-y-4">
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block tracking-wider uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-brand text-primary-foreground rounded-sm text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300 shadow-lg disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
