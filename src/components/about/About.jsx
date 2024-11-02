import TechStack from "./TechStack"
import Github from "./Github"
import AboutMe from "./AboutMe"

const About = () => {
    return (
        <>
        <div className="about-page">
        <AboutMe/>
        <TechStack/>
        <Github />
        </div>
        </>
    )}


    export default About