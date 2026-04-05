import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Phone, Clock, ExternalLink } from "lucide-react";

const branches = [
  {
    name: "Barabazar",
    type: "Head Office",
    address: "5th Floor, Onex Central, 12, Syed Salley St, West Bengal 700073",
    phone: "+91 83340 38247",
    hours: "All days except Sunday · 10:00 AM – 7:00 PM",
    isPrimary: true,
    directionsUrl: "https://www.google.com/maps/dir//M.K.+TRADING+%7C+Barabazar,+5th+Floor,+Onex+Central,+12,+Syed+Salley+St,+West+Bengal+700073/@17.6024974,78.1222224,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a027711942ccb9b:0x7c0f24780c40daf2!2m2!1d88.3600191!2d22.5783715?entry=ttu",
  },
  {
    name: "Metiabruz",
    type: "Branch Office",
    address: "V-134/2, SA Farooquie Rd, Bartala, Kolkata, West Bengal 700018",
    phone: "+91 83340 38247",
    hours: "All days except Wednesday · 10:00 AM – 7:00 PM",
    isPrimary: false,
    directionsUrl: "https://www.google.com/maps/dir//M.K.TRADING+%7C+Metiabruz,+V-134%2F2,+SA+Farooquie+Rd,+Bartala,+Kolkata,+West+Bengal+700018/@17.6024974,78.1222224,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a0279f6e795d84f:0x1339004a14acd1b9!2m2!1d88.2696153!2d22.5409384?entry=ttu",
  },
];

const BranchesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="branches" className="py-14 md:py-20 bg-secondary texture-diagonal" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">
            Our Presence
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Visit Our Offices
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`relative bg-card rounded-sm p-7 border shadow-sm hover:shadow-lg transition-all duration-500 ${
                branch.isPrimary ? "border-accent/30 ring-1 ring-accent/10" : "border-border"
              }`}
            >
              {branch.isPrimary && (
                <span className="absolute -top-3 left-8 bg-gradient-brand text-primary-foreground text-xs font-semibold px-4 py-1 rounded-sm tracking-widest uppercase">
                  Head Office
                </span>
              )}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-sm bg-gradient-brand flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{branch.name}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{branch.type}</p>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                    {branch.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>{branch.hours}</span>
                </div>
              </div>
              <a
                href={branch.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent hover:text-primary transition-colors duration-300 group"
              >
                Get Directions
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
