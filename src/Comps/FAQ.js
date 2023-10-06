import React from "react"

export default function FAQ(){
   const [questions, setQuestions] = React.useState([{id: 1, open: false},{id: 2, open: false},{id: 3, open: false}, {id: 4, open: false}, {id: 5, open: false}])

   function questionOpen (num){
        setQuestions(oldQuestions => oldQuestions.map(part =>{
            if(part.id === num){
                return {...part, open: !part.open }
            } else{
                return part
            }
        }))


   }
   console.log(questions[0])

   
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
                            <button className="faq-item--button" onClick={() => questionOpen(1)}><i class="fa-solid fa-angle-down"></i></button>
                        </div>
                        { questions[0].open? <p>tttt</p> :<p></p> }
                    </div>


                </div>

            </div>
        </div>
        
        )
}