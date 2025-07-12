import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Truck, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Settings,
      title: "ERP Expertise",
      description: "Specialized in Microsoft Dynamics 365 F&O and AX 2012, with focus on SCM, Procurement, and Inventory modules.",
      color: "primary"
    },
    {
      icon: Truck,
      title: "Logistics Foundation",
      description: "Deep understanding of logistics operations, import/export processes, and supply chain management.",
      color: "accent"
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Proven track record in client interaction, requirement gathering, and solution delivery.",
      color: "secondary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Transforming logistics expertise into ERP excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Professional Journey</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  My journey began in logistics and supply chain management, where I spent over 6 years mastering end-to-end SCM processes. This foundation has enabled a seamless transition into ERP consulting, where I now specialize in Microsoft Dynamics 365 Finance & Operations.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  I'm passionate about bridging the gap between complex business processes and technology solutions, helping organizations optimize their operations through strategic ERP implementations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center mr-4`}>
                        <feature.icon className={`text-${feature.color} h-6 w-6`} />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">{feature.title}</h4>
                    </div>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
