"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Header() {
  const { language, setLanguage, content } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "uk" : "en");
  };

  const navLinks = [
    { name: content.about.title, href: "#about" },
    { name: content.skills.title, href: "#skills" },
    { name: content.projects.title, href: "#projects" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent"
        >
          Alina Riabova
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-brand-600 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="h-6 w-[1px] bg-gray-300 mx-2" />

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-bold uppercase hover:text-brand-600 transition-colors"
          >
            <Globe size={18} />
            {language}
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-bold uppercase hover:text-brand-600 transition-colors"
          >
            <Globe size={18} />
            {language}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 p-1"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
