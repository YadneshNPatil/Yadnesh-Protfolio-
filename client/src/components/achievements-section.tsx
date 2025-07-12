import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Star } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Team Award",
      description: "Recognized for exceptional team collaboration and collective achievement in driving organizational success",
      color: "primary"
    },
    {
      icon: Medal,
      title: "Individual Performer",
      description: "Awarded for outstanding individual contribution and commitment to excellence in professional responsibilities",
      color: "accent"
    },
    {
      icon: Star,
      title: "Monthly Star Executive",
      description: "Consistently recognized as a role model for focused efforts and dedicated performance",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Achievements</h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Recognized for excellence and leadership in professional growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br from-${achievement.color}/5 to-${achievement.color}/10 hover:shadow-lg transition-shadow duration-300 h-full`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-${achievement.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <achievement.icon className={`text-${achievement.color} h-8 w-8`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{achievement.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
