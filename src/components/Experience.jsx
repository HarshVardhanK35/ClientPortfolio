import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <ul className="space-y-8">
          <li>
            <h3 className="font-semibold text-xl">RBC, Remote</h3>
            <p className="text-gray-700 mb-2">
              <strong>Role:</strong> Full Stack Developer (Dec 2023 - Present)
            </p>
            <p>
              Contributed to the Digital Banking Experience Enhancement
              initiative, optimizing digital interfaces and integrating
              real-time transaction tracking systems.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-xl">TTEC, USA</h3>
            <p className="text-gray-700 mb-2">
              <strong>Role:</strong> Full Stack Developer (Dec 2021 - Nov 2023)
            </p>
            <p>
              Developed a Customer Support Automation System using AI/ML to
              enhance efficiency and reduce response times.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
