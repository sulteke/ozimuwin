"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects, type Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/lib/dictionary";

/** Branded preview shown when a project has no screenshot yet. */
function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col bg-gradient-to-br ${project.accent} transition-transform duration-500 group-hover:scale-105`}
    >
      {/* Fake browser bar */}
      <div className="flex items-center gap-1.5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        <div className="ml-2 flex h-5 flex-1 items-center rounded-full bg-white/20 px-3 text-[11px] font-medium text-white/90">
          {project.domain}
        </div>
      </div>
      {/* Brand name */}
      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6">
        <span className="text-center text-2xl font-bold text-white drop-shadow-sm sm:text-3xl">
          {project.name}
        </span>
        <div className="flex gap-2">
          <span className="h-2 w-16 rounded-full bg-white/40" />
          <span className="h-2 w-10 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}

export function Works() {
  const { t, locale } = useLanguage();
  const lang = locale as Locale;

  return (
    <section id="works" className="bg-background py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading title={t.works.title} subtitle={t.works.subtitle} />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => {
            const isExternal = project.url.startsWith("http");
            return (
              <Reveal key={project.name} delay={index * 0.08}>
                <Card className="group h-full overflow-hidden transition-shadow duration-300 hover:shadow-soft-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ProjectPreview project={project} />
                  </div>

                  <div className="flex flex-col gap-3 p-6">
                    <span className="inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {project.tag[lang]}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description[lang]}
                    </p>
                    <Button asChild variant="outline" className="mt-2 w-fit">
                      <a
                        href={project.url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        {t.works.openSite}
                        <ExternalLink />
                      </a>
                    </Button>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
