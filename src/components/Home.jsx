import React from 'react';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
   return (
      <div className='intro-card-div'>
         <section className='intro-card'>
            <img className="hannah-icon" src="/assets/hannah-icon.png" alt="Hannah Chapman portrait" />
            <h1 className='name-intro'>Hi, I'm Hannah</h1>
            <h1 className='role-intro'>Junior Fullstack Developer from the UK</h1>
            <h2 className='personal-profile-intro'>I am a junior developer with a background in e-commerce, having worked across various industries where I saw firsthand the impact of well-crafted code on transforming business performance and user experience. This sparked my passion for bringing ideas to life through software development while using my love for continuous learning, critical thinking, and problem-solving.</h2>
            <div className='intro-buttons-div'>
               <Button
                  className='contact-button'
                  component="a"
                  href="#contact"
                  variant="contained"
                  sx={{
                     backgroundColor: "#612375", 
                     p: 1.5,
                     margin: 2,
                     textTransform: 'capitalize',
                     fontWeight: 'bold',
                     fontSize: 18,
                     pr: 3,
                     pl: 3,
                     pt: 1,
                     pb: 1,
                     color: "#ffffff",
                     transition: "all 0.3s ease-in-out",
                     '&:hover': {
                        backgroundColor: "#832E9F", 
                        color: "var(--white)", 
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                        transform: "scale(1.05)",
                     }
                  }}
                  tabIndex={-1}
                  startIcon={<MailOutlineIcon className='intro-button-icon' />}
               >
                  Contact me
               </Button>
               <Button
                  className='project-button'
                  component="a"
                  href="#projects"
                  variant="contained"
                  sx={{
                     backgroundColor: "#832161",
                     p: 1.5,
                     margin: 2,
                     textTransform: 'capitalize',
                     fontWeight: 'bold',
                     fontSize: 18,
                     pr: 3,
                     pl: 3,
                     pt: 1,
                     pb: 1,
                     color: "#ffffff",
                     transition: "all 0.3s ease-in-out",
                     '&:hover': {
                        backgroundColor: "#9D2774",
                        color: "var(--white)",
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                        transform: "scale(1.05)",
                     },
                  }}
                  tabIndex={-1}
                  startIcon={<GitHubIcon className='intro-button-icon' />}
               >
                  My projects
               </Button>
            </div>
         </section>
      </div>
   );
};

export default Home;