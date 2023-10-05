import React from "react"

export default function FAQ(){
   const [questions, setquestion] = React.useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false
   })
// array of objects 
   

   
    return (
        <div className="container--big-row ">
            <div className="content-section">
                <h3 className="content-section--2title special-color">FAQS</h3>
                <h1 className="content-section--1title">Questions got your <span className="special-color-1">tongue </span><span className="special-color">?</span></h1>
                <p className="content-section--para"> We got all the answers for them. No need to catch a hairball.</p>
                <div className="faq-list">
                    <div className="faq-item">
                        <div className="faq-item--group">
                        <h2>How does security work with your hosting services? </h2>
                        <button className="faq-item--button"><i class="fa-solid fa-angle-down"></i></button>
                        </div>
                        
                    </div>


                </div>

            </div>
        </div>
        
        )
}