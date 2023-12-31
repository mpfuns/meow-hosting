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
        <div className="test-container">
        <figure className="content--img-container"><img  src="cats-paw-5325371.png"/></figure>
        <div className="content--description">
            <h3 className="content-section--2title special-color content--text-right">TESTIMONIALS</h3>
            <h1 className="content-section--1title content--text-right">Our <span className="special-color-1">Clowder</span> Love Us.</h1>
            <p className="content-section--para content-section--para-left">Hear from some  of  our customers  and  what they think about our company</p>
            <br/>
            <div>
                <div className='test--stars'>
                <i class="fa-solid fa-star test--star-space"></i>
                <i class="fa-solid fa-star test--star-space"></i>
                <i class="fa-solid fa-star test--star-space"></i>
                <i class="fa-solid fa-star test--star-space"></i>
                <i class="fa-solid fa-star test--star-space"></i>  
                </div>
                <h3 className='content--text-right'>{content.title}</h3>
                <br/>
                <p className='content-section--para-left'>{content.para}</p>
                <br/>
                <div className='test-layout--bottom'>
                    <div className='test--cat'>
                        <figure className='test--cat-photo-container'><img   className='test--cat-photo' src={`testimonals/${content.picImg}`} /></figure>
                        <h2>{content.name}</h2>  
                    </div>
                    <div className='test-buttons--container'>
                        <div className='test-buttons--line'>
                        <button className='test-buttons'  onClick={()=> setCount(prevCount =>prevCount-1)}><i class="fa-solid fa-arrow-left"></i></button>
                        </div>
                        <div>
                        <button  className='test-buttons' onClick={()=> setCount(prevCount =>prevCount+1)}><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                        
                    </div>
                </div>
               
            </div>
        </div>

        </div>
        </div>
        
        )
}