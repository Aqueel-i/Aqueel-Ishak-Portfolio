import React from "react";

const Home = () => {
  return (
    <section className="pt-20" id="home">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Your Name</h2>
        <p className="text-lg text-gray-600 mb-6">A Passionate Developer | Problem Solver | Lifelong Learner</p>
        <a
          href="#projects"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
