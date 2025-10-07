import React from 'react';
import profilePic from '../assets/prisca.jpeg'; // Your profile picture

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-0">
        
        {/* Profile Image with Hover Effect */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
          <div className="relative group w-72 h-72">
            <img
              src={profilePic}
              alt="Ojimba Prisca Chisom"
              className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[orangered] bg-opacity-75 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-full">
              <h3 className="text-2xl font-bold">Fun Fact!</h3>
              <p className="text-center px-3">
                I love coding, reading, watching nature, and finding inspiration through music.
              </p>
            </div>
          </div>
        </div>

        {/* About Me Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hello there! I’m <strong>Ojimba Prisca Chisom</strong> — a creative and goal-driven <strong>Software Engineer</strong> with a deep passion for turning ideas into digital reality. 
            I’m dedicated to crafting modern, responsive, and user-focused web applications that don’t just function well but also make a lasting impact.
          </p>
          <p className="text-lg leading-relaxed">
            My journey into tech began with curiosity and evolved into purpose — a drive to build solutions that empower people and simplify everyday life. 
            With hands-on experience in <strong>React, Node.js, Express, MongoDB</strong> and growing expertise in <strong>Python, Java (NetBeans), and MySQL</strong>, 
            I love transforming challenges into creative, functional, and elegant code.
          </p>
          <p className="text-lg leading-relaxed">
            Outside the world of code, I find peace in watching nature — its calmness inspires my creativity and reminds me to appreciate life’s simple beauty. 
            I also enjoy reading motivational books and listening to music that fuels my imagination. 
            For me, every project is more than just development; it’s an opportunity to create something meaningful and leave a positive footprint in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
