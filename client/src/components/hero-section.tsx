import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "../../attached_assets/WhatsApp Image 2025-07-12 at 3.09.31 PM_1752314224486.jpeg";

export default function HeroSection() {
  const handleContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would trigger the actual download
    window.open("/api/resume/download", "_blank");
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Yadnesh <span className="gradient-text">Patil</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-neutral mb-6">
              ERP Finance & Operations Consultant
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Results-driven ERP Functional Consultant specializing in Microsoft Dynamics 365 Finance & Operations (D365 F&O), with 6+ years of hands-on experience in logistics and supply chain processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={handleContact}
                className="bg-primary text-white px-8 py-3 font-semibold hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                onClick={handleDownloadResume}
                variant="outline"
                className="border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full profile-blur-bg flex items-center justify-center">
                <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={profileImage} 
                    alt="Yadnesh Patil - ERP Finance & Operations Consultant" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full backdrop-blur-sm"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
