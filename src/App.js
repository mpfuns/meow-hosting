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
  const [startSection, setStartSection]= useState(false);
  const featRef= useRef();
  const [featSection, setFeatSection]= useState(false);
  const QualRef= useRef();
  const [QualSection, setQualSSection]= useState(false);






useEffect(() =>{ 
 
  const observer = new IntersectionObserver((entries) =>{
    const entry = entries[0].isIntersecting;

    console.log(entries)
    console.log(entry)
    })
    //not work Switch and statements
    // need to use if staments  

   // setSections(entry.isIntersecting)
   //map  the  change to  make it  object 
   


   // control what observer
    observer.observe(startRef.current)
    observer.observe(featRef.current)
    observer.observe(QualRef.current)

   
},[])




  return (
    <div className="App">
     
      <Nav />
     
    
      <section  className='' ref={startRef}>
      <Started />
      </section>
      
      <section className=''ref={featRef}>
        <Features />
      </section>
      <section className='hidden-section--left' ref={QualRef} >
      <Quality />
      </section>
     
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
