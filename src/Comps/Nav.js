import React from "react"


export default function Nav (){
   
    const [menuDrop, setMenuDrop] =  React.useState(false)

    function handleClick(){
        setMenuDrop(!menuDrop)
        
    }

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

            {menuDrop?
            <div className="menu__drop">
            <button className="btn__menu btn__menu--close" onClick={handleClick}>
            <i class="fa-solid fa-x"></i>
            </button>
            <ul className="menu__links">
            <li className="menu_list"><a href="#" className="menu_link no-cursor" onClick={handleClick}>About</a></li>
            <li className="menu_list"><a href="#" className="menu_link no-cursor" onClick={handleClick}>Blog</a></li>
            <li className="menu_list" ><a href="#" className="menu_link no-cursor" onClick={handleClick}>Contact us</a></li>
            <li className="menu_list" ><a href="#" className="menu_link no-cursor" onClick={handleClick}>Login</a></li>
            <li className="menu_list" ><a href="#" className="menu_link no-cursor" onClick={handleClick}>Sign Up</a></li>
            </ul> 
          </div> 
          :
          <button className="btn__menu" onClick={handleClick}>
          <i class="fa-solid fa-bars"></i>
          </button>
          }
          
          
            </div>
            </nav>)
}