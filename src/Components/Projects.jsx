import React, { useState } from 'react';

// Importing the images
import project1Image from '../assets/cap2.jpg';
import project2Image from '../assets/capture1.jpg';
import project3Image from '../assets/pro.png';
import project4Image from '../assets/broa.png';
import project5Image from '../assets/hye.png';
import project6Image from '../assets/min.png';
import project7Image from '../assets/ee.png';

const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my work, built with React and Tailwind CSS.',
    image: project2Image,
    liveDemo: 'https://xomcodes.vercel.app/',
  },
  {
    title: 'A Catholic Church Site',
    description: 'A catholic church site showcasing the details and information about the church.',
    image: project1Image,
    liveDemo: 'https://st-marys-rho.vercel.app/',
  },
  {
    title: 'A Charity/Donation site',
    description: 'A Website meant for helping poor communties',
    image: project3Image,
    liveDemo: 'https://givebloom.vercel.app/',
  },
  {
    title: 'Human Resources/Services site',
    description: 'A Website meant human resources and consulting',
    image: project4Image,
    liveDemo: 'https://agile360-pmc.com/',
  },
  {
    title: 'Simba Ventures Website',
    description: 'An Ecommerce website for selling Cars, Bicycles and Spare Parts',
    image: project5Image,
    liveDemo: 'https://simba-ventures.vercel.app/',
  },
  {
    title: 'A Simple Online App Software',
    description: 'A simple Java multipurpose online store software',
    image: project6Image,
    liveDemo: '#',
  },
   {
    title: 'A Computer Based Test Software',
    description: 'A Computer Based Test Software for students to pratice with',
    image: project7Image,
    liveDemo: 'https://elesson.vercel.app/',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 object-cover h-48 w-full"
              />
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[orangered] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 inline-block"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg mb-4 object-cover h-48 w-full"
              />
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <p className="mt-4">{selectedProject.description}</p>
              <div className="mt-6">
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 inline-block"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
