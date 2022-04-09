import React from 'react'
import "../styles/Skills.css";
export default function Skills() {
  return (
    <div className="about component__space" id="skills">
    <div className="container">
      <div className="row">
    <div className="col__2">
            <h1 className="about__skills">Skills</h1>
            <h4 className="title">HTML5
            <img className="titles" src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299529/5847f5bdcef1014c0b5e489c_mwgmv3.png' alt='HTML 5' /></h4>
            <div class="progress">
              <div
                class="progress-bar w-75 bg-success"
                role="progressbar"
                // aria-valuenow="75"
                // aria-valuemin="0"
                // aria-valuemax="100"
              ></div>
            </div>


  

            <h4 className="title">CSS
            <img className="titless" src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299529/css_zszamh.png' alt='CSS 3' /></h4>
            <div class="progress">
              <div
                class="progress-bar w-50 bg-danger"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

   

            <h4 className="title">JAVASCRIPT
            <img className="titlesss" src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/JS_oehidy.png' alt='JS' /></h4>
            <div class="progress">
              <div
                class="progress-bar w-75 bg-secondary"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <h4 className="title">MERN stack
            {/* <img className="mern" src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/mongodb-logo_tpygyf.png' alt='Mongo DB' /><img className="mern" src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/react_dpmoli.png' alt='React Js' />  <img className="mern" src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/node_rfyvfz.png' alt='NodeJs' /></h4> */}
            <img className="mern"src="https://miro.medium.com/max/900/1*Dc5f6x9KxALujjUDzn7PWw.jpeg"/></h4>
            <div class="progress">
              <div
                class="progress-bar w-75 bg-primary"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="50"
                aria-valuemax="10"
              ></div>
            </div>

            {/* <div class="progress">
            <div class="progress-bar"  style="width: 15%">25%</div>
            </div> */}


          </div>
          </div>
          </div>
          </div>
  )
}

