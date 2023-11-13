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
  const qualRef= useRef();
  const stepRef= useRef();
  const valueRef= useRef();
  const pricingRef= useRef();
  const  testRef= useRef();
  const  faqRef= useRef();
  const introRef= useRef();
  const footerRef= useRef();




  const [count, setCount]= useState(0)



  


useEffect(() =>{ 
 
  //set up for observer
  const obsever = new IntersectionObserver((entries) =>{
 const entry=entries[0]
 console.log(entry)
 entry.target.classList.toggle('show', entry.isIntersecting)
 
 if(entry.isIntersecting=== true){
  setCount(prev => prev+1)
   obsever.unobserve(entry.target)
   
 }

 console.log(count)
    
    

    
  }, {threshold:0.02,
  rootMargin:"150px"})
// control what observer observe
if(count===0){
  obsever.observe(startRef.current)
  
}
else if(count ===1){
  obsever.observe(featRef.current)


}
else if(count ===2){
  obsever.observe(qualRef.current)
  
}
else if(count ===3){
  obsever.observe(stepRef.current)
  
}
else if(count ===4){
  obsever.observe(valueRef.current)
  
}
else if(count ==5){
  obsever.observe(pricingRef.current)
  
}
else if(count ===6){
  obsever.observe(testRef.current)
  
}
else if(count ===7){
  obsever.observe(faqRef.current)
  
}
else if(count ===8){
  obsever.observe(introRef.current)
  
}
else if(count ===9){
  obsever.observe(footerRef.current)
  
}
   
},[count])




  return (
    <div className="App">
     
    
     
    
      <section  className= "section--left" ref={startRef}>
        <Nav />
        <Started />
      </section>
      
      <section className='section--right'ref={featRef}>
        <Features />
      </section>
      <section className='section--left' ref={qualRef} >
        <Quality />
      </section>
     <section className='section--right'ref={stepRef}>
        <Steps />
     </section>
      <section   className='section--left' ref={valueRef}>
        <Value />
      </section>
    <section className='section--right'ref={pricingRef}>
        <Pricing />
    </section>

     <section className='section--left' ref={testRef}>
      <Testimon data={data} />
     </section>
    <section className='section--right'ref={faqRef} >
      <FAQ />
    </section>
    <section className='section--left' ref={introRef}>
        <Intro />
    </section> 
     <section className='section--right'ref={footerRef}>
       <Footer />
     </section>
      
    </div>
  );
}

export default App;
