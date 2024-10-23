import React from 'react';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

const IntroCard = () => {
   return (
      <div className='intro-card-div'>
         <section className='intro-card'>
            <img className="hannah-icon" src="/assets/hannah-icon.png" alt="Hannah Chapman portrait" />
            <h1 className='name-intro'>Hi, I'm Hannah</h1>
            <h1 className='role-intro'>Junior Fullstack Developer from the UK</h1>
            <h2 className='personal-profile-intro'>I am a junior developer with a background in e-commerce, having worked across various industries where I saw firsthand the impact of well-crafted code on driving sales and traffic. This experience sparked my passion for bringing ideas to life through software development while using my love for continuous learning, critical thinking, and problem-solving.</h2>
            <div className='intro-buttons-div'>
               <Button
               className='contact-button'
                  component="a"
                  href="#contact"
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<MailOutlineIcon />}
               >
                  Contact me
               </Button>
               <Button
               className='project-button'
                  component="a"
                  href="#projects"
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<GitHubIcon />}
               >
                  My projects
               </Button>
            </div>
         </section>
      </div>
   );
};

export default IntroCard;