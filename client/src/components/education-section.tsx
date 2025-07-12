import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, University, Book } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      icon: GraduationCap,
      period: "2016-2018",
      degree: "Post Graduate Diploma",
      field: "Supply Chain Management",
      institution: "Welingkar Institute of Management Development & Research, University of Mumbai",
      color: "primary"
    },
    {
      icon: University,
      period: "2016-2018",
      degree: "Master of Commerce",
      field: "Business Management",
      institution: "M.L. Dahanukar College of Commerce, University of Mumbai",
      color: "accent"
    },
    {
      icon: Book,
      period: "2014-2016",
      degree: "Bachelor of Commerce",
      field: "Commerce",
      institution: "M.L. Dahanukar College of Commerce, University of Mumbai",
      color: "secondary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Academic foundation in business management and supply chain
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${edu.color}/10 rounded-lg flex items-center justify-center mr-4`}>
                      <edu.icon className={`text-${edu.color} h-6 w-6`} />
                    </div>
                    <span className={`text-${edu.color} font-medium`}>{edu.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-slate-600 mb-4 font-medium">{edu.field}</p>
                  <p className="text-sm text-neutral leading-relaxed">{edu.institution}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
