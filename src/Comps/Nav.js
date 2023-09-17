import React from "react"


export default function Nav (){
   
   
    return (
        <nav className="container--big-row">
            <div className="nav__container ">
                <div className="logo">
                <figure className="logo__container"><a href="#" ><img src='paw.png' alt="Meow Hosting Icon"/></a></figure>
                <li><a href="#" className="nav_logo-text">  Meow Hosting</a></li>  
                </div> 
         <div>
          <ul className="nav__list">
            
            <li><a href="" className="nav_link no-cursor link__hover-line">About</a></li>
            <li><a href="" className="nav_link no-cursor  link__hover-line">Blog</a></li>
            <li><a href="" className="nav_link no-cursor link__hover-line">Contact us</a></li>
            <li><a href="" className="nav_link no-cursor link__hover-line">Login</a></li>
            <li><a href="" className="nav_link nav__link--primary no-cursor">Sign Up</a></li>
            </ul> 
            </div>


          
          
            </div>
            </nav>)
}