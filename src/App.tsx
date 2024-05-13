import React from 'react';
import './App.css';
import SideNav from './components/SideNav';
import Main from './components/Main';
import Projects from './components/Projects';
import Work from './components/Work';
import ResumeFiles from './assets/ResumeFiles';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <ResumeFiles />
      <Contact />
    </div>
  );
}

export default App;
