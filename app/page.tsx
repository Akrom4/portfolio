"use client";

import React, { useState } from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import { ExperiencesTimeline } from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Projects from "@/components/Projects";
import Education from "@/components/Education";




const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} modalOpen={modalOpen} />
        <Hero />
        <Grid />
        <Projects setModalOpen={setModalOpen} />
        <ExperiencesTimeline />
        <Education />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
