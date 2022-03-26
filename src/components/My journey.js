import React from 'react'
import '../styles/My journey.css'

export default function Resume() {
    return (
      <>
      <div id="resume" class="resume" >
        <h1 class="section-heading-title">MY JOURNEY </h1>
      <div class="container">

        <div class="row">
          <div class="col-lg-6" id="align">
            <h3 class="resume-title">About Me</h3>
            <div class="resume-item pb-0">
              <h4>Velan S</h4>
              <p><em>Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages. Born To Explore, Tries to learn something new every day,  digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <p>
                <h5>2021 - till</h5>
              <ul>
                <li>(+91) 8608687416</li>
                <li>velanvicky01@gmail.com</li>
              </ul>
              </p>
            </div>
              <div class="resume-item">
              <h4>Proficiency</h4>
              <ul type="1">
                <li>1.Well known with JavaScript.</li>
                <li>2.Mern stack development. </li>
                <li>3.Good in Data structures.</li>
              </ul>
            </div>
            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachelor of Engineering; Ece</h4>
              <h5>2014 - 2018</h5>
              <p><em>Christ college of engineering and  Technology, Pondicherry, IN</em></p>
              <p>Completed my graduation in Electronics and Commucnication(ECE) stream without any career gap and gained 7.8CGPA </p>
            </div>
           
          </div>
          <div class="col-lg-6" id="aligns">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Line leader in Production</h4>
              <h5>2018 - 2020</h5>
              <p><em>TSMT pvt limited, Chennai, IN </em></p>
              <p>
              <ul>
                <li>Responsible for the production line from start to end of the process.</li>
                <li>Responsible for reporting the managers about production details.</li>
                <li>Managing the team target as well as individual target of team members.</li>
                <li>Production output record maintenance and related works.</li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Junior Engineer in Production</h4>
              <h5>2020 - 2021</h5>
              <p><em>Avary teachnology pvt limited, Chennai, IN</em></p>
              <p>
              <ul>
                <li>Handeling the team members to achieve the daily production.</li>
                <li>Reporting the managers about the productions details and daily target achievemnets.</li>
                <li>Production output record maintenance and related works.</li>
              </ul>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
    )
}