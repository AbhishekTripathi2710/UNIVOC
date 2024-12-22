import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-50/80 shadow-md  rounded-b-[4.3rem] flex flex-col gap-6 relative mx-auto w-[90%] h-full mt-8 border-blue-600 border-2 rounded-t-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src='./images/logo.png' className='w-[10rem]'></img>
        </div>

        <nav className="flex items-center space-x-8 flex-1 justify-center">
          <div className="relative">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-blue-200">
              <span className="text-gray-700">Explore</span>
              <span className="text-gray-500">▼</span>
            </button>
          </div>

          <div className="relative flex-1 max-w-xl">
            <input
              type="text"
              placeholder="What do you want to learn today"
              className="w-full px-12 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50">
            Sign in
          </button>
          <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            Register for free
          </button>
        </div>
      </div>

      <div className="relative w-full h-[400px] overflow-hidden">
        <img 
          src="./images/Frame 2232-1.png" 
          alt="Background Graphic" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 p-[100px] ">
          <nav className="text-white mb-8 after:content-[''] after:block after:w-1/2 after:mt-2 after:border-b-2 after:border-white">
            <ol className="flex items-center space-x-2 gap-10">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/programs" className="hover:underline">Integrated Degree Programs</a></li>
              <li>Data Science</li>
            </ol>
          </nav>

          <h1 className="text-5xl font-bold text-white mb-4">Data Science</h1>
          <div className="flex items-center">
            {[1, 2, 3, 4].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
            <span className="text-yellow-400/50 text-2xl">★</span>
            <span className="text-white ml-2">(4.5)</span>
          </div>
        </div>

        <img 
          src='./images/image 304.png' 
          alt="Data Scientist Working"
          className="absolute right-0 bottom-0 w-[40%] h-full object-contain object-bottom rounded-br-[13%]"
        />
      </div>
    </header>
  );
};

export default Header;

