import { motion } from "framer-motion";

const techStack = ["Zapier", "Slack", "Gmail", "HubSpot"];

const DetailsSection = () => {
  return (
    <section id="details" className="py-16 md:py-24 bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Project Description
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This project is an automated lead capture system for a
                recruitment agency
              </p>
              <p>
                When a candidate submits an application it triggers webhook
                after that creates a new contact in HubSpot, sends a
                notification to a Slack channel in order to notify the team
                about new candidate, and sends a confirmation email to the
                candidate.
              </p>
              <p>
                Reduces manual work, ensures instant team alerts and
                professional candidate communication, improving efficiency and
                hiring speed.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Timeline
              </h3>
              <p className="text-muted-foreground">3 days (January 2026)</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                My Role
              </h3>
              <p className="text-muted-foreground">
                Zapier Automation Engineer
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
