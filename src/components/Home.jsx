import React from 'react';
import SocialIcons from './SocialIcons';

const Home = () => {
   return (
      <div className='homepage-content'>
      <div className='intro-card-div'>
         <section className='intro-card'>
            <img className="hannah-icon" src="/assets/hannah-icon.png" alt="Hannah Chapman portrait" />
            <h1 className='name-intro'>Hi, I'm Hannah</h1>
            <h1 className='role-intro'>Fullstack Developer from the UK</h1>
            <h2 className='personal-profile-intro'>I am a developer with a background in CRO and e-commerce, having worked across various industries where I saw firsthand the impact of well-crafted code on transforming business performance and user experience. This sparked my passion for bringing ideas to life through software development while using my love for continuous learning, critical thinking, and problem-solving.</h2>
         </section>
      </div>
         <SocialIcons/>
         </div>
   );
};

export default Home;