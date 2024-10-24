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
            {/* Overlay content to be shown on hover */}
            <div className="absolute top-0 left-0 w-full h-full bg-[orangered] bg-opacity-75 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h3 className="text-2xl font-bold">Fun Fact!</h3>
              <p className="text-center">I love coding, reading and music.</p>
            </div>
          </div>
        </div>

        {/* About Me Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Hi, I'm <strong>Ojimba Prisca Chisom</strong>, a passionate and ambitious MERN Developer. I specialize in building scalable and dynamic web applications using modern frameworks and technologies. With some experience, I enjoy solving technical problems and constantly learning new skills.
          </p>
          <p className="text-lg">
            When I'm not coding, you'll find me exploring new tech trends, listening to music, reading inspirational books. 
          </p>
          {/* Add more sections about skills, experiences, or journey */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
