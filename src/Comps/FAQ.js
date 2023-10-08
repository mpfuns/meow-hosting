import React from "react"

export default function FAQ(){
   const [questions, setQuestions] = React.useState([{id: 1, open: false},{id: 2, open: false},{id: 3, open: false}, {id: 4, open: false}, {id: 5, open: false}])
    



   function questionOpen (num){
    

    setQuestions(oldQuestions => oldQuestions.map(part =>{
            if(part.id === num){
                return {...part, open: !part.open }
            } else{
                return {...part, open:  false }
            }
        }))
      

   }

   
   
    return (
        <div className="container--big-row ">
            <div className="content-section">
                <h3 className="content-section--2title special-color">FAQS</h3>
                <h1 className="content-section--1title">Questions got your <span className="special-color-1">tongue </span><span className="special-color">?</span></h1>
                <p className="content-section--para"> We got all the answers for them. No need to catch a hairball.</p>
                <div className="faq-list">
                    <div className="faq-item">
                        <div className="faq-item--group">
                            <h3>How does security work with your hosting services? </h3>
                            <button className="faq-item--button"  onClick={() => questionOpen(1)}style={ 
                                questions[0].id=== 1& questions[0].open ? { transform: 'rotate(-180deg) translatez(0px)',
                                transition: "all 0.3s ease 0s"} :
                                { transform: 'none',
                                transition: "all 0.3s ease 0s"} } ><i class="fa-solid fa-angle-down"></i></button>
                        </div>
                        { questions[0].open? <p className="faq-item--para">Our hosting services include various security measures such as firewalls, malware scanning, DDoS protection, and SSL certificates to safeguard your website and data. Regular backups are also provided to ensure data recovery in case of any unforeseen events.</p> :<p></p> }
                    </div>
                    <div className="faq-item">
                        <div className="faq-item--group">
                            <h3>Can I upgrade my hosting plan as my website grows?</h3>
                            <button className="faq-item--button"  onClick={() => questionOpen(2)}style={ 
                                questions[1].id=== 2& questions[1].open ? { transform: 'rotate(-180deg) translatez(0px)',
                                transition: "all 0.3s ease 0s"} :
                                { transform: 'none',
                                transition: "all 0.3s ease 0s"} } ><i class="fa-solid fa-angle-down"></i></button>
                        </div>
                        { questions[1].open? <p className="faq-item--para">Absolutely! We understand that your hosting needs may evolve over time. You can easily upgrade your hosting plan to accommodate increased traffic, resources, and features. Our seamless upgrade process ensures minimal downtime during the transition.</p> :<p></p> }
                    </div>
                    <div className="faq-item">
                        <div className="faq-item--group">
                            <h3>Do you offer website migration services? </h3>
                            <button className="faq-item--button"  onClick={() => questionOpen(3)}style={ 
                                questions[2].id=== 3& questions[2].open ? { transform: 'rotate(-180deg) translatez(0px)',
                                transition: "all 0.3s ease 0s"} :
                                { transform: 'none',
                                transition: "all 0.3s ease 0s"} } ><i class="fa-solid fa-angle-down"></i></button>
                        </div>
                   
                         { questions[2].open? <p className="faq-item--para">Yes, we provide website migration assistance for customers transferring from other hosting providers. Our support team will guide you through the process, ensuring a smooth migration of your website and data.</p> :<p></p> }
                       
                    </div>
                    <div className="faq-item">
                        <div className="faq-item--group">
                            <h3>Can I register a domain through your hosting service? </h3>
                            <button className="faq-item--button"  onClick={() => questionOpen(4)}style={ 
                                questions[3].id=== 4& questions[3].open ? { transform: 'rotate(-180deg) translatez(0px)',
                                transition: "all 0.3s ease 0s"} :
                                { transform: 'none',
                                transition: "all 0.3s ease 0s"} } ><i class="fa-solid fa-angle-down"></i></button>
                        </div>
                      
                        { questions[3].open? <p className="faq-item--para">Yes, we offer domain registration services, and many of our hosting plans include a free domain for the first year. You can also transfer your existing domain to us for hassle-free management.</p> :<p></p> }
                            
                    </div>
                    <div className="faq-item">
                        <div className="faq-item--group">
                            <h3>What control panel do you provide for managing my hosting?</h3>
                            <button className="faq-item--button"  onClick={() => questionOpen(5)}style={ 
                                questions[4].id=== 5& questions[4].open ? { transform: 'rotate(-180deg) translatez(0px)',
                                transition: "all 0.3s ease 0s"} :
                                { transform: 'none',
                                transition: "all 0.3s ease 0s"} } ><i class="fa-solid fa-angle-down"></i></button>
                        </div>
                             
                        { questions[4].open? <p className="faq-item--para" >Yes, we offer domain registration services, and many of our hosting plans include a free domain for the first year. You can also transfer your existing domain to us for hassle-free management.</p> :<p></p> }
                            
                    </div>
                </div>

            </div>
        </div>
        
        )
}