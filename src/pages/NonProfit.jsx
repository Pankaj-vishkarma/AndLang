import NonProfitForm from "../components/section/NonProfit/formSection";
import NonProfitHero from "../components/section/NonProfit/NonProfitHero";
import ContributionsAndNewsletter from "../components/section/NonProfit/ContributionsAndNewsletter";
import OurPortfolio from "../components/section/OpenSource/OurPortfolio";
const NonProfit = () => {
    return (

        <>
            <NonProfitHero />
            <NonProfitForm />
            <ContributionsAndNewsletter />
            <OurPortfolio />
        </>
    )
}

export default NonProfit;