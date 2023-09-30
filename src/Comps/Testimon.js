import React from 'react'


export default function  Testimon (props){
   const[content, setContent]= React.useState([])
   const[count, setCount]= React.useState(1)

   if(count=== 0){
    setCount(7)
   }
   if(count=== 8){
    setCount(1)
   }

   
   React.useEffect(()=>{

        const sameContent =props.data.filter(piece => piece.number === count)

    setContent(sameContent[0])
   
   },[count])


    return (
        <div className="container--big-row">
        <div className="steps-container">
        <figure className="content--img-container"><img  src="cats-paw-5325371.png"/></figure>
        <div className="content--description">
            <h3 className="content-section--2title special-color content--text-right">TESTIMONIALS</h3>
            <h1 className="content-section--1title content--text-right">Our <span className="special-color-1">Clowder</span> Love Us.</h1>
            <p className="content-section--para content-section--para-left">Each plan is designed to cater to different levels of hosting needs and budgets, ensuring that customers can choose the plan that best suits their specific requirements. As their websites and online ventures grow, they can easily upgrade to higher-tier plans for more resources, features, and support.</p>
            <div>
                <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>  
                </div>
                <h1>{content.title}</h1>
                <p>{content.para}</p>
                <div>
                 <figure><img  src={`testimonals/${content.picImg}`} /></figure>
                 <h3>{content.name}</h3>  
                </div>
                <button onClick={()=> setCount(prevCount =>prevCount-1)}><i class="fa-solid fa-arrow-left"></i></button>
                <button onClick={()=> setCount(prevCount =>prevCount+1)}><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>

        </div>
        </div>
        
        )
}