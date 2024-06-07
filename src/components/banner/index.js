


import './index.css'
import image7 from '../../assets/image 7.svg'
import maskImage from '../../assets/Mask group.svg'
import image9 from '../../assets/image 9.svg'


import figmaImage from '../../assets/image 13.svg'
import eclipse from '../../assets/Ellipse 20.svg'
import eclipse21 from '../../assets/Ellipse 21.svg'
import eclipse18 from '../../assets/Ellipse 18.svg'
import graph25 from '../../assets/Group 25.svg'


const Banner = ()=>{

    return (
        <div className="bg-container">
            
            <div 
            data-aos='fade-down'
            data-aos-offset='0'
            data-aos-delay='50'
            data-aos-easing = 'linear'
            data-aos-duration="1000"
            data-aos-mirror='true'
            data-aos-once='false'
            
             className="text-container">
                <h1 className="improve-heading">IMPROVE WITH COURSES & COACHES</h1>
                <h1 className="learning-heading">Learn UI/UX Design from Industry Experts</h1>
                <p className="experience-para">We make sure that you have best learning experience</p>
            </div>
            <div className="cards-container">
                <div

            data-aos='zoom-out-up'
            data-aos-offset="80"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
                            
                className="card1">
                    
                    <img src={image7} alt="card1" className="card1-image"/>
                    <h1 className="online-courses-heading">ONLINE COURSES</h1>
                    <button type="button" className="enroll-now-button">ENROLL NOW</button>
                </div>
                <div 

                data-aos='zoom-out-up'
                data-aos-offset="80"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                
                className="card1">
                    
                    <img src={maskImage} alt="card1" className="card1-image"/>
                    <h1 className="online-courses-heading">OFFLINE COURSES</h1>
                    <button type="button" className="enroll-now-button">ENROLL NOW</button>
                </div>
                <div 
                
                data-aos='zoom-out-up'
             data-aos-offset="80"
             data-aos-delay="30"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center"
                className="card1"
                
                >
                    
                    <img src={image9} alt="card3" className="card1-image"/>
                    <h1 className="online-courses-heading">PLACEMENT GUIDE</h1>
                    <button type="button" className="enroll-now-button">ENROLL NOW</button>
                </div>

                

            </div>

            <div
            data-aos="zoom-out-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            
            className="animation-text-container">
                
                <div className="image-container">
                    <img src={graph25} alt="animation" className="animation-image"/>
                </div>
                <div className="master-class-code">
                    <h1 className="master-heading">MASTERCLASS</h1>
                    <h1 className="learn-from-the-props-heading">LEARN FROM THE <br/> PROS</h1>
                    <p className="animation-para">Boost your skills with 9artsmedia.The best produced<br>
                    
                    </br>
                    esports coaching across various categories.
                    </p>
                    <p className="ready-to-improve-para">Ready to Improve? Learn from the best.</p>
                    <button type="button" className="join-us-button">JOIN US</button>

                </div>
            </div>

            <div
            
             data-aos='zoom-out-up'
             data-aos-offset="40"
             data-aos-delay="50"
             data-aos-duration="600"
             data-aos-easing="ease-in"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center"
            
            className="master-class-coaching-bg-container">
                <div className="master-class-coaching-text-container">
                    <h1 className="master-class-coaching-heading">MASTERCLASSES & COACHING</h1>
                    <h1 className="optimize-skill-set-heading">OPTIMIZE YOUR <br/> SKILL SET</h1>
                    <p className="professional-trainer-para">A Professional trainer will help you make better decision,<br/>
                    known what to watch out for, and level up quickly.
                    </p>
                    <p className="professional-trainer-para">A Professional trainer will help you make better decision,<br/>
                    known what to watch out for, and level up quickly.
                    </p>

                </div>
                <div className="language-cards-container">
                    <div className="left-side-container">
                        <div className="individual-contaier">
                            <img src={eclipse18} alt="ps" className="figma-image"/>
                        </div>
                        <div className="individual-contaier">
                            <img src={eclipse21} className="figma-image" alt="figma"/>
                        </div>
                    </div>
                    <div className="right-side-container">
                    
                        <div className="individual-contaier">
                            <img src={figmaImage} className="figma-image" alt="ai"/>
                        </div>
                        <div className="individual-contaier">
                            <img src={eclipse} className="figma-image" alt="xd"/>
                        </div>
                    </div>

                </div>

            </div>
          
            
        </div>
    )

}


export default Banner