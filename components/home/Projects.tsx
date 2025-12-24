"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const { content } = useLanguage();
  const { projects } = content;

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mt-2 mb-4">
            {projects.title}
          </h2>
          <div className="w-24 h-1 bg-brand-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-brand-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 w-full overflow-hidden border-b border-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-900 group-hover:text-brand-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-accent-500">
                      {project.role}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wide font-bold text-brand-700 bg-brand-50 rounded-md border border-brand-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
