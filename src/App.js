import './App.css';
import Nav from './Comps/Nav'
import Started from './Comps/Started';
import Features from './Comps/Features';
import Quality from './Comps/Quality';
import Steps from './Comps/Steps';
import Value from './Comps/Value';
import Pricing from './Comps/Pricing';
import Testimon from './Comps/Testimon';
import data from './data';
import FAQ from './Comps/FAQ';
import Intro from './Comps/Intro';
import Footer from './Comps/Footer';
import React, { useEffect, useState, useRef } from 'react';
function App() {

  const startRef= useRef();
  const [sections, setSections]= useState([]);
console.log('sections', sections)

useEffect(() =>{ 
   const observer = new IntersectionObserver((entries) =>{
    const entry = entries[0];
      setSections(entry.isIntersecting)
   

   })
   observer.observe(startRef.current)
},[])




  return (
    <div className="App">
     
      <Nav />
     
    
      <section  ref={startRef}>
      <Started />
      </section>
      
      <Features />
      <Quality />
      <Steps />
      <Value />
      <Pricing />
      <Testimon data={data} />
      <FAQ />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
