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
  const featRef= useRef();
  const QualRef= useRef();
  const [sections, setSections]= useState([{answer:false}, {answer:false}, {answer:false}]);

console.log(sections)




useEffect(() =>{ 
 /*
  const observer = new IntersectionObserver((entries) =>{
    const entry = entries[0];
    console.log(entries)
    entries.map( entry=>{
      const placeInList= entries.indexOf(entry)
     setSections(Prev =>{ Prev.map(part=>{
      const piece= part.findIndex((num)=> num === placeInList)
      if(piece.answer !== entry.isIntersecting){
        return{
          answer:entry.isIntersecting
        }
      }
     }
     
     )
     
     }
      )
    })

   // setSections(entry.isIntersecting)
   //map  the  change to  make it  object 
   

   })
   // control what observer
    observer.observe(startRef.current)
    observer.observe(featRef.current)
    observer.observe(QualRef.current)

   */

},[sections])




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
