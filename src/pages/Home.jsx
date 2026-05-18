import HeroSection from '../components/section/Home/HeroSection.jsx'
import Service from '../components/section/Home/ExploreServices.jsx'
import Recent from '../components/section/Home/RecentWork.jsx'
import NewsLetter from '../components/section/Home/NewsletterSection.jsx'
import LatestArticles from '../components/section/Home/LatestArticles.jsx'

const Home = () => {
    return (
        <>
            <HeroSection />
            <Service />
            <Recent />
            <NewsLetter />
            <LatestArticles />
        </>

    );
};

export default Home;