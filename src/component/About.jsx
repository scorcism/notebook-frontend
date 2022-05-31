import React from 'react'

const About = () => {
  return (
    <>
    <div className="about">
      <div className="about_me">
        <ul className="ul">
        <h2 className='fancy_heading'>Abhishek Pathak aka scorcism</h2>
          <li className='ul_li'>I'm a computer science student.</li>
          <li className='ul_li'>Exploring the tech which will exists tomorrow.</li>
          <li className='ul_li'>That's it :)</li>
          <li className='ul_li'>See yaaa</li>
          <li className='ul_li'>:- If your are intrested in collaboration fell free to approach me -:</li>
        </ul>
      </div>
      <div className="about_project">
        <ul className="ul">
          <h2>Tech used</h2>
          <li className="li_head">Frontend :-</li>
          <li className="ul_li">React JS, CSS, HTML, Google fonts, Pixabay Images</li>
          <li className="li_head">
          Backend :-
          </li>
          <li className="ul_li"> Mysql, Express, Node JS, JWT, bycrptJS, express-validator,</li>
          <li className="li_head">Platforms: :-</li>
          <li className="ul_li">
            <a href="https://www.phpmyadmin.co/" target="_blank" rel="noopener noreferrer">MYSQL Hosting</a> <br/>
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">App Hosting</a> <br/>
            <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Backend Hosting</a> <br/>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default About