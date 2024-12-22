import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Benifits from './components/Benifits';
import Footer from './components/Footer';
import JobsAndCourses from './components/JobsAndCourses.jsx';
import ContactForm from './components/ContactForm.jsx';

const App = () => {
  return (
    <div className="font-sans min-h-screen bg-blue-200 ">
      <Header/>
      <Intro />
      <Benifits />
      <JobsAndCourses />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default App;
