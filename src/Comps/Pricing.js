import React from "react"

export default function Pricing(){
   const[business, setBusiness]= React.useState(false)
   const [pro, setPro]= React.useState(false)

   function businessHandle(){
    setBusiness(!business)
   }
   function proHandle(){
    setPro(!pro)
   }


   
    return (
        <div className="container--big-row ">
            <div className="content-section">
            <h3 className="content-section--2title special-color">PRICING</h3>
            <h1 className="content-section--1title">Reasonable & Flexible <span className="special-color-1">Plans</span></h1>
            <p className="content-section--para">Each plan is designed to cater to different levels of hosting needs and budgets, ensuring that customers can choose the plan that best suits their specific requirements. As their websites and online ventures grow, they can easily upgrade to higher-tier plans for more resources, features, and support.</p>
            <div className="plan-list">
                <br/>
                <div className="plan-item">
                    <div className="plan-item--strip strip-button-green"><br/></div>
                    <div className="plan-item--top">
                        <div className="plan-item--top-description">
                        <h2 classname="plan-item--title">STARTER</h2>
                        <h1 className="plan-item--price">$4.99</h1>
                        <h3 className="plan-item--month">MONTHLY</h3>
                        </div>
                    </div>
                    <div className="plan-item--mid">
                        <h3>For Small Websites,<br/>Personal Blogs, Beginners</h3>
                       <div >
                        <p className="plan-item--para">1 website</p>
                        <p className="plan-item--para">10 GB SSD storage</p>
                        <p className="plan-item--para">Unlimited bandwidth</p>
                        <p className="plan-item--para">Free domain for the first year</p>
                        <p className="plan-item--para">Free SSL certificate</p>
                        <p className="plan-item--para">24/7 customer support</p>
                        <p className="plan-item--para">Easy-to-use control panel</p>
                        <p className="plan-item--para">1-click WordPress installation</p>
                        <p className="plan-item--para">Basic security features</p>
                        <br/>
                        </div> 

                    </div>
                    <div className="plan-item--bot">
                        <button className="plan-item--button no-cursor strip-button-green">BUY NOW</button>
                    </div>
                </div>
                <div className="plan-item">
                    <div className="plan-item--strip strip-button-blue"><br/></div>
                    <div className="plan-item--top strip-button-blue">
                        <div className="plan-item--top-description">
                        <h2 classname="plan-item--title"><span className="special-color-1">BUSINESS</span></h2>
                        <h1 className="plan-item--price"><span className="special-color-1">$9.99</span></h1>
                        <h3 className="plan-item--month"><span className="special-color-1">MONTHLY</span></h3>
                        </div>
                    </div>
                    <div className="plan-item--mid strip-button-blue strip-button-blue-line">
                        <h3 className="special-color-2">Growing businesses,<br/> e-commerce stores</h3>
                       
                          { business?
                        <div >
                          <p className="plan-item--para special-color-2">Up to 5 websites</p>
                          <p className="plan-item--para special-color-2">50 GB SSD storage</p>
                          <p className="plan-item--para special-color-2">Unlimited bandwidth</p>
                          <p className="plan-item--para special-color-2">Free domain for the first year</p>
                          <p className="plan-item--para special-color-2">Free SSL certificate</p>
                          <p className="plan-item--para special-color-2">24/7 premium customer support</p>
                          <p className="plan-item--para special-color-2">Advanced control panel with website analytics</p>
                          <p className="plan-item--para special-color-2">1-click WordPress installation and staging</p>
                          <p className="plan-item--para special-color-2">Enhanced security features (firewall, malware scanning)</p>
                          <p className="plan-item--para special-color-2">E-commerce integration support</p>
                          <p className="plan-item--para special-color-2">Regular automated backups</p>
                          <p className="plan-item--para special-color-2">1-click WordPress installation and staging</p>
                          <div className="plan-item--flex">
                          <button className="plan-item--more-button special-color-1" onClick={businessHandle}><i class="fa-solid fa-x"></i></button>
                          </div>
                        </div> 
                            :
                            <div >
                            <p className="plan-item--para special-color-2">Up to 5 websites</p>
                            <p className="plan-item--para special-color-2">50 GB SSD storage</p>
                            <p className="plan-item--para special-color-2">Unlimited bandwidth</p>
                            <p className="plan-item--para special-color-2">Free domain for the first year</p>
                            <p className="plan-item--para special-color-2">Free SSL certificate</p>
                            <p className="plan-item--para special-color-2">24/7 premium customer support</p>
                            <p className="plan-item--para special-color-2">Advanced control panel with website analytics</p>
                            <div className="plan-item--flex plan-item--flex-match">
                            <button className="plan-item--more-button special-color-1" onClick={businessHandle}><i class="fa-solid fa-ellipsis"></i></button>
                            </div>
                            <br/>
                          </div>
                          }  

                        
                        

                    </div>
                    <div className="plan-item--bot strip-button-blue">
                        <button className="plan-item--button no-cursor white-button">BUY NOW</button>
                    </div>
                </div>
                <div className="plan-item">
                    <div className="plan-item--strip strip-button-red"><br/></div>
                    <div className="plan-item--top">
                        <div className="plan-item--top-description">
                        <h2 classname="plan-item--title">PRO</h2>
                        <h1 className="plan-item--price">$19.99</h1>
                        <h3 className="plan-item--month">MONTHLY</h3>
                        </div>
                    </div>
                    <div className="plan-item--mid">
                        <h3>For High-traffic websites, developers,<br/> resource-intensive applications</h3>
                       { pro?
                       <div >
                       <p className="plan-item--para">Unlimited websites</p>
                       <p className="plan-item--para">100 GB SSD storage</p>
                       <p className="plan-item--para">Unlimited bandwidth</p>
                       <p className="plan-item--para">Free domain for the first year</p>
                       <p className="plan-item--para">Free SSL certificate</p>
                       <p className="plan-item--para">24/7 priority customer support with dedicated account manager</p>
                       <p className="plan-item--para">Developer-friendly control panel with SSH access</p>
                       <p className="plan-item--para">1-click WordPress installation, staging, and Git integration</p>
                       <p className="plan-item--para">Advanced security suite (firewall, malware scanning, DDoS protection)</p>
                       <p className="plan-item--para">Performance optimization tools</p>
                       <p className="plan-item--para">Advanced analytics and reporting</p>
                       <p className="plan-item--para">Daily automated backups with 1-click restore</p>
                       <p className="plan-item--para">1-click WordPress installation, staging, and Git integration</p>
                       <p className="plan-item--para">Developer-friendly control panel with SSH access</p>
                       <div className="plan-item--flex"> 
                       <button className="plan-item--more-button" onClick={proHandle}><i class="fa-solid fa-x"></i></button>
                       </div>
                       </div> 
                       :
                       <div >
                       <p className="plan-item--para">Unlimited websites</p>
                       <p className="plan-item--para">100 GB SSD storage</p>
                       <p className="plan-item--para">Unlimited bandwidth</p>
                       <p className="plan-item--para">Free domain for the first year</p>
                       <p className="plan-item--para">Free SSL certificate</p>
                       <p className="plan-item--para">24/7 priority customer support with dedicated account manager</p>
                      
                     
                       <div className="plan-item--flex">
                       <button className="plan-item--more-button" onClick={proHandle}><i class="fa-solid fa-ellipsis"></i></button>
                       </div>
                        <br/>
                       </div> 

                       }
                      </div>
                    <div className="plan-item--bot">
                        <button className="plan-item--button no-cursor strip-button-red">BUY NOW</button>
                    </div>
                </div>


            </div>

            </div>
        </div>
        
        )
}