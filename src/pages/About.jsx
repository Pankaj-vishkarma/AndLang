import AboutHero from '../components/section/About/AboutHero.jsx';
import OurVision from '../components/section/About/OurVisionMission.jsx'
import OurClients from '../components/section/About/OurClients.jsx'
import MeetTeam from '../components/section/About/MeetTeam.jsx';

const About = () => {
    return (
        <>
            <AboutHero />
            <OurVision />
            <OurClients />
            <MeetTeam />
        </>
    );
};

export default About;