"use client";

import React from "react";
import { SOCIALS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const { content } = useLanguage();
  const { footer } = content;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-brand-900 text-white py-16 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 via-accent-500 to-brand-600 opacity-50" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {footer.title}
            </h2>
            <p className="text-brand-100 max-w-md">{footer.text}</p>
          </div>
          <a
            href="mailto:alinavr7@gmail.com"
            className="group flex items-center gap-3 bg-white text-brand-900 px-8 py-4 rounded-full font-bold hover:bg-accent-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-accent-500/50"
          >
            <Mail className="group-hover:animate-bounce" />
            alinavr7@gmail.com
          </a>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-brand-300 text-sm">
            © {currentYear} Alina Riabova. {footer.rights}
          </div>
          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-300 hover:text-accent-400 hover:scale-110 transition-all"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="p-3 bg-brand-800 rounded-full hover:bg-brand-700 transition-colors text-brand-300 hover:text-white"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
