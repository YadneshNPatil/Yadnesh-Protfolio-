import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Puzzle, TrendingUp, Truck, FileText, Languages } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Database,
      title: "ERP Systems",
      color: "primary",
      skills: [
        { name: "Microsoft Dynamics 365 F&O", level: "Expert" },
        { name: "AX 2012", level: "Advanced" }
      ]
    },
    {
      icon: Puzzle,
      title: "D365 Modules",
      color: "accent",
      skills: [
        { name: "Supply Chain Management", level: "Expert" },
        { name: "Procurement", level: "Expert" },
        { name: "Inventory Management", level: "Expert" }
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Skills",
      color: "secondary",
      skills: [
        { name: "Requirement Analysis", level: "Expert" },
        { name: "Process Optimization", level: "Advanced" },
        { name: "Client Consulting", level: "Advanced" }
      ]
    },
    {
      icon: Truck,
      title: "Logistics",
      color: "neutral",
      skills: [
        { name: "Import/Export Operations", level: "Expert" },
        { name: "Customs Clearance", level: "Expert" },
        { name: "Cargo Management", level: "Advanced" }
      ]
    },
    {
      icon: FileText,
      title: "Documentation",
      color: "primary",
      skills: [
        { name: "UAT Scripts", level: "Advanced" },
        { name: "SOP Development", level: "Advanced" },
        { name: "Process Mapping", level: "Advanced" }
      ]
    },
    {
      icon: Languages,
      title: "Languages",
      color: "accent",
      skills: [
        { name: "English", level: "Fluent" },
        { name: "Hindi", level: "Native" },
        { name: "Marathi", level: "Native" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-500";
      case "Advanced": return "bg-blue-500";
      case "Fluent": return "bg-blue-500";
      case "Native": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Expertise in ERP systems and business process optimization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br from-${category.color}/5 to-${category.color}/10 hover:shadow-lg transition-shadow duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`text-${category.color} h-6 w-6`} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-slate-700 text-sm">{skill.name}</span>
                        <Badge className={`${getLevelColor(skill.level)} text-white text-xs`}>
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
