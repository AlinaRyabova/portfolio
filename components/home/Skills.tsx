"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Server, Layout, Wrench } from "lucide-react";

export function Skills() {
  const { content } = useLanguage();
  const { skills } = content;

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-6 h-6 text-accent-400" />;
      case 1:
        return <Layout className="w-6 h-6 text-brand-400" />;
      case 2:
        return <Wrench className="w-6 h-6 text-yellow-400" />;
      default:
        return <Server className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-brand-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {skills.title}
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-lg">{getIcon(idx)}</div>
                <h3 className="text-xl font-bold text-brand-50">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-brand-800/50 text-brand-100 border border-brand-700/50 hover:border-accent-400/50 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
