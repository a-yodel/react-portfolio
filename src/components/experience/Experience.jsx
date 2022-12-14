import "./experience.css"
import {BsShieldFillCheck} from "react-icons/bs"

export default function Experience() {
  return (
    <section id="experience">
       <h5>The Skills I Have</h5>
       <h2>My Experience</h2>
         <div className="container experience_container"> 
             <div className="experience_frontend">
                <h3>Frontend Development</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsShieldFillCheck className="experience_details-icon"/>
                        <div>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsShieldFillCheck className="experience_details-icon"/>
                        <div>
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsShieldFillCheck className="experience_details-icon"/>
                        <div>
                        <h4>JAVASCRIPT</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsShieldFillCheck className="experience_details-icon"/>
                        <div>
                        <h4>BOOTSTRAP</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                </div>
            </div> 
                            {/*End Of Frontend  */}

             <div className="experience_backend">
                <h3>Backend Development</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsShieldFillCheck className="experience_details-icon"/>
                        <div>
                        <h4>NodeJS</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsShieldFillCheck className="experience_details-icon"/>
                        <div>
                        <h4>PYTHON</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsShieldFillCheck className="experience_details-icon"/>
                        <div>
                        <h4>MySQL</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsShieldFillCheck className="experience_details-icon"/>
                        <div>
                        <h4>MongoDB</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                </div>
            </div> 
         </div> 
    </section>
  )
}