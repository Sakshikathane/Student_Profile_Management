import React from 'react';

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/1600x900/?coding,technology")',
      }}
    >
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
        Welcome to <span className="text-yellow-400">Student Profile Manager</span>
      </h1>
      <p className="text-lg mb-8 text-center px-6 max-w-3xl">
        Manage student profiles effectively. Add, edit, and categorize skills with ease while maintaining a beautiful and responsive design.
      </p>
      <a
        href="#about"
        className="bg-yellow-400 px-6 py-3 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;
