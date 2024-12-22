import React, { useState } from 'react';

const BenefitCard = ({ title, description, isActive }) => {
  return (
    <div 
      className={`rounded-[2rem] p-8 min-h-[280px] flex flex-col bg-[#4285F4] text-white transition-all duration-300 ease-in-out relative overflow-hidden
        ${isActive 
          ? 'scale-110 z-10 shadow-[0_4px_20px_0px_rgba(66,133,244,0.3)]' 
          : 'scale-100 blur-[2px]'
        }
        before:absolute before:content-[""] before:top-0 before:left-[-100%] before:w-[150%] before:h-full
        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
        ${isActive ? 'before:animate-shine' : ''}
      `}
    >
      <div className="mb-6 relative z-10">
        <img src='./images/Frame 2418.png' className='w-[100px]' alt="Benefit icon" />
      </div>

      <h3 className="text-2xl font-medium mb-4 text-white relative z-10">
        {title}
      </h3>
      <p className="text-lg leading-relaxed text-white/90 relative z-10">
        {description}
      </p>
    </div>
  );
};

const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const benefits = [
    {
      title: "Placement Facilitation",
      description: "Career support and placement facilitation will be provided for students who successfully complete the program."
    },
    {
      title: "Blended Delivery",
      description: "A data science course blends technical skills like programming and statistical analysis with practical knowledge in machine learning and visualization. It enhances career opportunities and empowers data-driven decision-making across industries."
    },
    {
      title: "Value Additions",
      description: "The students will be enabled with various value additions including Engineering Ensemble, free Micro-learning, webinars and other impactful events"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % benefits.length);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-[4rem] font-normal text-center mb-16 border-b-2 border-black pb-4 max-w-2xl mx-auto">
        Benefits
      </h2>

      <div className="relative px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              isActive={index === activeIndex}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-[#4285F4] rounded-full p-4 text-white shadow-[0_4px_15px_0px_rgba(66,133,244,0.3)] hover:bg-blue-600 transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Benefits;

