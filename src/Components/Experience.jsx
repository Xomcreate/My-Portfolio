import React, { useState, useEffect } from 'react';

const experiencesData = [
  {
    company: 'Personal Projects & Freelance Work',
    role: 'Software Developer',
    duration: 'May 2024 - Present',
    icon: '💻',
    description:
      'Since beginning my coding journey in May 2024, I’ve built and deployed several impactful projects — including a Computer-Based Testing (CBT) application for students, a dynamic Invoice Management system, and a modern Donation Platform using React, Node.js, and MongoDB. These projects strengthened my skills in frontend and backend development, database design, and API integration, giving me a solid foundation in full-stack software development.',
  },
  {
    company: 'Independent Learning & Continuous Growth',
    role: 'Software Development Journey',
    duration: '2024 - 2025',
    icon: '🚀',
    description:
      'My journey started with curiosity and determination — learning the essentials of JavaScript, Python, and Java (with NetBeans). Over time, I mastered frameworks like React, Express, and Node.js, while also exploring databases such as MySQL and MongoDB. Each project I built has taught me to code with purpose, write clean logic, and think like a problem solver, not just a programmer.',
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
              className={`timeline-item relative transition-opacity duration-700 ease-in-out ${
                visibleExperiences.includes(index) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className={`flex items-center justify-${
                  index % 2 === 0 ? 'start' : 'end'
                } mb-10`}
              >
                <div className="bg-[orangered] text-white p-4 rounded-full text-xl mr-6 flex-shrink-0">
                  {experience.icon}
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-xl">
                  <h3 className="text-2xl font-semibold">{experience.role}</h3>
                  <p className="text-gray-600">{experience.company}</p>
                  <p className="text-gray-400 text-sm">{experience.duration}</p>
                  <p className="mt-4 text-gray-700">{experience.description}</p>
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
