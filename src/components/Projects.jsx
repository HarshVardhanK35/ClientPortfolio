import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-md">
            <h3 className="text-xl font-semibold mb-2">
              Digital Banking Experience
            </h3>
            <p>
              Optimized digital interfaces and enhanced security for RBC’s
              banking platform.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-md">
            <h3 className="text-xl font-semibold mb-2">
              Customer Support Automation
            </h3>
            <p>
              Integrated AI/ML technologies to streamline customer service
              processes.
            </p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
