"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Download, ArrowRight } from "lucide-react";
import { SOCIALS } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="absolute top-0 right-0 -z-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-100 rounded-full blur-[80px] md:blur-[120px] opacity-70" />
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent-400/20 rounded-full blur-[80px] md:blur-[120px] opacity-70" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 animate-in slide-in-from-left duration-700 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-600 w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
            <span className="text-sm font-medium">{hero.role}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight text-brand-900">
            {hero.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  i < 2
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500"
                    : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-brand-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 hover:shadow-brand-600/40"
            >
              {hero.cta}
              <ArrowRight size={20} />
            </a>

            <a
              href="/AlinaRiabova_CV.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-gray-200 hover:border-brand-600 hover:text-brand-600 text-slate-700 transition-all bg-white shadow-sm"
            >
              <Download size={20} />
              {hero.downloadCv}
            </a>
          </div>

          <div className="flex gap-6 mt-4 md:mt-8">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-600 transition-colors hover:scale-110 transform"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative block animate-in slide-in-from-right duration-700 delay-200 max-w-[320px] md:max-w-[400px] mx-auto w-full order-1 md:order-2 mb-8 md:mb-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-accent-500 rounded-[2rem] rotate-6 opacity-20 blur-2xl" />
          <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl shadow-brand-900/10 rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden aspect-[4/5] border border-white group">
            <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-brand-50">
              <Image
                src="/avatar.jpg"
                alt="Alina Riabova"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
