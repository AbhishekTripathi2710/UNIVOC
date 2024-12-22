import React from 'react';

const Intro = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-[6rem] pl-[9rem] pr-8">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-[2.5rem] font-normal mb-6 border-b-2 border-black">
              About the Program
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              The "Data Science" program is an intensive course designed for 
              individuals eager to pursue a career in the rapidly growing field of 
              data analysis. As industries increasingly rely on data to drive 
              decision-making, the need for skilled data scientists is on the rise. 
              This program covers essential areas such as data mining, machine 
              learning, statistical analysis, and data visualization. Students will 
              engage in hands-on projects and learn to work with tools like 
              Python, R, and SQL. By combining theoretical foundations with 
              practical skills, graduates will be well-prepared to excel in diverse 
              roles within data-driven sectors like technology, finance, and 
              healthcare.
            </p>
          </div>

          <div className="bg-transparent rounded-[2rem] p-8 border-2 border-black">
            <h2 className="text-[2.5rem] font-normal mb-6 border-b border-black">
              Courses
            </h2>
            <div className="space-y-4">
              <button className="w-full bg-white px-6 py-4 rounded-xl text-left flex justify-between items-center shadow-sm">
                Technical Skills
                <span className="text-gray-400">▼</span>
              </button>
              <button className="w-full bg-white px-6 py-4 rounded-xl text-left flex justify-between items-center shadow-sm">
                Functional skills
                <span className="text-gray-400">▼</span>
              </button>
              <button className="w-full bg-white px-6 py-4 rounded-xl text-left flex justify-between items-center shadow-sm">
                Behavioural skills
                <span className="text-gray-400">▼</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[450px] mt-11">
          <div className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-blue-800">
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/images/Frame 2300-2.png" 
                  alt="Data Scientist working"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-[#4285F4] text-white px-12 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors">
                  Start Learning
                </button>
              </div>
              <div className="space-y-6 pt-4">
                <div className="flex justify-between items-center border-b border-black pb-3">
                  <span className="text-xl font-normal">Duration</span>
                  <span className="text-xl">45hrs</span>
                </div>
                <div className="flex justify-between items-center border-b border-black pb-3">
                  <span className="text-xl font-normal">Language</span>
                  <span className="text-xl">English</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-xl font-normal">Total Credits</span>
                  <span className="text-xl">30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

