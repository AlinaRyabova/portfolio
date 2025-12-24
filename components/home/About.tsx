"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Briefcase, Code, UserCheck } from "lucide-react";

export function About() {
  const { content } = useLanguage();
  const { about } = content;

  const icons = [
    { icon: Briefcase, color: "bg-blue-50 text-blue-600" },
    { icon: GraduationCap, color: "bg-purple-50 text-purple-600" },
    { icon: Code, color: "bg-teal-50 text-teal-600" },
    { icon: UserCheck, color: "bg-rose-50 text-rose-600" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* ЗМІНА: sticky працює тільки на md (планшет/десктоп) */}
          <div className="w-full md:w-1/2 md:sticky md:top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-brand-600 rounded-full" />
              {about.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {about.description}
            </p>
            <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
              <p className="text-brand-800 italic font-medium">{about.quote}</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {about.features.map((feature, idx) => {
              const IconData = icons[idx];
              const Icon = IconData.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${IconData.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
