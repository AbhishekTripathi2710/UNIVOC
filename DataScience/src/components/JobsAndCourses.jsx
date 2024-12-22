import React from 'react';
import { Star } from 'lucide-react';

const StarRating = () => (
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-6 h-6 ${
          index < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/20 text-yellow-400/20'
        }`}
      />
    ))}
  </div>
);

const CourseCard = ({ title, imageSrc }) => (
  <div className="flex items-center gap-4 py-6 border-b border-black">
    <div className="rounded-2xl overflow-hidden w-24 h-24 flex-shrink-0">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-medium">{title}</h3>
      <StarRating />
    </div>
  </div>
);

const JobsAndCourses = () => {
  const jobRoles = [
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Engineer",
    "Data Engineer",
    "Business Intelligence Analyst",
    "Data Architect",
    "Data Science Manager",
    "Quantitative Analyst",
    "Data Visualization Specialist",
    "AI Research Scientist"
  ];

  const courses = [
    {
      title: "Java Full Stack Web",
      imageSrc: "/images/image-2.png"
    },
    {
      title: "Full Stack MEAN Development",
      imageSrc: "/images/image 292.png"
    },
    {
      title: "Dot Net Full Stack",
      imageSrc: "/images/image-3.png"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-48">
        <div className='ml-16'>
          <h2 className="text-[3rem] font-normal mb-8 border-b-2 border-black pb-4">
            Job Roles
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {jobRoles.map((role, index) => (
              <li key={index} className="flex items-center text-lg">
                <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                {role}
              </li>
            ))}
          </ul>
        </div>
        <div className='ml-16'>
          <h2 className="text-[3rem] font-normal mb-8 border-b-2 border-black pb-4">
            Related Courses
          </h2>
          <div className="space-y-2">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                imageSrc={course.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsAndCourses;