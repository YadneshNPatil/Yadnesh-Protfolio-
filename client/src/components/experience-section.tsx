import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "Feb 2025 - Present",
      badge: "Current",
      badgeColor: "bg-primary/10 text-primary",
      title: "Associate Consultant - Finance & Operations",
      company: "Key Dynamics Solutions Pvt. Ltd.",
      location: "Delhi, India",
      companyColor: "text-primary",
      achievements: [
        "Providing functional consulting on D365 F&O across SCM, Procurement, and Inventory modules",
        "Supporting fit-gap analysis, requirement documentation, and UAT scripts",
        "Configured procurement flows including vendors, POs, and invoice matching"
      ],
      dotColor: "bg-primary"
    },
    {
      period: "Jul 2019 - Feb 2025",
      badge: "5+ Years",
      badgeColor: "bg-accent/10 text-accent",
      title: "Senior Executive - Import Operations (CHB)",
      company: "BDP UGL Global Logistics (India) Pvt. Ltd.",
      location: "Mumbai, India",
      companyColor: "text-accent",
      achievements: [
        "Coordinated end-to-end import clearance activities using company ERP systems",
        "Managed DPD shipments, bonded cargo, and factory de-stuff operations",
        "Collaborated cross-functionally on invoice matching and delivery order processing"
      ],
      dotColor: "bg-accent"
    },
    {
      period: "Dec 2016 - Jun 2019",
      badge: "2+ Years",
      badgeColor: "bg-secondary/10 text-secondary",
      title: "Executive - Operations (DDSM)",
      company: "CMA-CGM Shared Services (India) Pvt. Ltd.",
      location: "Mumbai, India",
      companyColor: "text-secondary",
      achievements: [
        "Handled global operations for Detention, Demurrage & Storage Monitoring via ERP tools",
        "Delivered SOPs and SLA matrices for European and Latin American markets",
        "Used process automation tools for workflow tracking and performance KPIs"
      ],
      dotColor: "bg-secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            A career journey from logistics operations to ERP consulting
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${exp.dotColor} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={exp.badgeColor}>{exp.badge}</Badge>
                        <span className="text-neutral text-sm">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{exp.title}</h3>
                      <p className={`${exp.companyColor} font-medium mb-1`}>{exp.company}</p>
                      <p className="text-slate-500 text-sm mb-4">{exp.location}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
