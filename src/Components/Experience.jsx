import React, { useState, useEffect } from 'react';

const experiencesData = [
  {
    company: 'Prisca',
    role: 'Full-Stack Developer',
    duration: 'Jan 2024 - Present',
    description: 'Developing and maintaining web applications with React, Node.js, and MongoDB.',
    icon: '💻',
  },
  
  
];

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const timelineElements = document.querySelectorAll('.timeline-item');
      timelineElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !visibleExperiences.includes(index)) {
          setVisibleExperiences((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleExperiences]);

  return (
    <section id="experience" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        {/* Timeline */}
        <div className="relative">
          <div className="border-l-4 border-[orangered] absolute left-1/2 transform -translate-x-1/2 h-full"></div>

          {experiencesData.map((experience, index) => (
            <div
              key={index}
              className={`timeline-item relative transition-opacity duration-500 ease-in-out ${
                visibleExperiences.includes(index) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center justify-start mb-8">
                <div className="bg-[orangered] text-white p-4 rounded-full text-xl mr-6 flex-shrink-0">
                  {experience.icon}
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-xl">
                  <h3 className="text-2xl font-semibold">{experience.role}</h3>
                  <p className="text-gray-600">{experience.company}</p>
                  <p className="text-gray-400 text-sm">{experience.duration}</p>
                  <p className="mt-4">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
