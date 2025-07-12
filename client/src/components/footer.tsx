import { Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Yadnesh Patil</h3>
            <p className="text-slate-400">ERP Finance & Operations Consultant</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/yadneshnareshpatil-2696/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:yadnesh2696@gmail.com" 
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+918976191640" 
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Yadnesh Patil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
