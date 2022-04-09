import React from 'react'
import '../styles/project.css'

export default function Projects() {
    return (
        <>
          <section id="project">
          <h1 class="section-heading-title">PROJECTS </h1>
          <div class="project container " data-aos="fade-right">
            <div class="col-right">
                    <h2 > WISHES - MERN Project </h2>
                  
                    <h3 id="des">A common online platform where you can create your wishes.</h3>
                    <ul className="tech_list">
                       <li className='li_tech_list list_top'> <i class="fas fa-angle-right left-arrow-heading" ></i> JavaScript </li>  
                       <li className='li_tech_list'><i class="fas fa-angle-right left-arrow-heading" ></i> Reactjs  </li>
                   </ul>                   
                    <ul className="tech_list">
                       <li className='li_tech_list list_top'> <i class="fas fa-angle-right left-arrow-heading" ></i> MongoDB </li>  
                       <li className='li_tech_list last_list_margin_bottom'><i class="fas fa-angle-right left-arrow-heading" ></i> NodeJs </li>
                   </ul>                   
                    <a href="https://wishes-me.netlify.app/" class="cta" rel="noopener noreferrer" target="_blank"><p class="fas fa-code-branch liveDemo_Icon"></p> Demo</a>
                    <a href="https://github.com/velanviki/Wishes-project" class="cta" rel="noopener noreferrer" target="_blank"><i class="fab fa-github github_Icon"></i> GitHub</a>
                </div>
              <div class="col-left">
                <div class="project-img"  data-aos="fade-in">
                <img src="https://img.rasset.ie/000f2acc-500.jpg" alt="img" />
                </div>

            </div>

            <div class="col-right">
                    <h2 > BLOG - MERN Project </h2>
                  
                    <h3 id="des">You can write your blog.</h3>
                    <ul className="tech_list">
                       <li className='li_tech_list list_top'> <i class="fas fa-angle-right left-arrow-heading" ></i> JavaScript </li>  
                       <li className='li_tech_list'><i class="fas fa-angle-right left-arrow-heading" ></i> Reactjs  </li>
                   </ul>                   
                    <ul className="tech_list">
                       <li className='li_tech_list list_top'> <i class="fas fa-angle-right left-arrow-heading" ></i> MongoDB </li>  
                       <li className='li_tech_list last_list_margin_bottom'><i class="fas fa-angle-right left-arrow-heading" ></i> NodeJs </li>
                   </ul>                   
                    <a href="https://blog-me.netlify.app/" class="cta" rel="noopener noreferrer" target="_blank"><p class="fas fa-code-branch liveDemo_Icon"></p> Demo</a>
                    <a href="https://github.com/velanviki/blog-project" class="cta" rel="noopener noreferrer" target="_blank"><i class="fab fa-github github_Icon"></i> GitHub</a>
                </div>
              <div class="col-left">
                <div class="project-img"  data-aos="fade-in">
                <img src="https://image.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg" alt="img" />
                </div>

            </div>
           
            </div>
            </section>
            </>
    )
};