"use client";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { experiences } from "@/data"; // Your experiences JSON

export function ExperiencesTimeline() {
  // Map your experiences to timeline entries
  const data = experiences.map((exp) => ({
    title: exp.period, // We'll show the period as the timeline title
    content: (
      <div>
        <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
          {exp.title}
        </h3>
        <p className="text-base text-neutral-700 dark:text-neutral-300">
          {exp.company ? (
            <>
              <strong>{exp.company}</strong>
              {exp.location && " – "}
            </>
          ) : null}
          {exp.location}
        </p>
        {exp.tasks && exp.tasks.length > 0 && (
          <ul className="list-disc ml-5 mt-2 text-base text-neutral-600 dark:text-neutral-400">
            {exp.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
      </div>
    ),
  }));

  return (
    <section id="experiences" className="py-20 w-full">
      <h1 className="heading text-center mb-12">
        Mes Expériences<span className="text-purple"> Professionnelles</span>
      </h1>
      <Timeline data={data} />
    </section>
  );
}
