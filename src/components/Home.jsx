import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <section id="home" className="text-center my-16">
        <h1 className="text-4xl font-bold mb-3">Welcome!</h1>
        <p className="text-lg mb-6">
          Hi, I'm Lakshmi Pravallika, a Full Stack Developer passionate about
          crafting scalable and innovative solutions.
        </p>
        {/* <a
          href="LakshmiPravallikaResume.docx"
          download
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Download Resume
        </a> */}
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
