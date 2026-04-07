import React from 'react'
import OurServices from '../components/OurServices'
import OurCoreValue from '../components/OurCoreValue'
import OurVisionMission from '../components/OurVisionMission'
import CommonHero from '../components/CommonHero'
import JoinUs from '../components/JoinUs'

const NibeditaMentalHealthCenter = () => {
    const heroTitle = "Mental Health Care, Personalized For You";
    const heroDes = "At CWFD Nibedita Mental Health Center, we provide mental Healthcare. Our caregiving process is unique to each individual. Since the needs vary from person-to-person. Our goal is to help you heal, grow, and move forward. So that you can be in full charge of your life.";
    const heroPageUrl = "/about";
    return (
        <>
            <CommonHero title={heroTitle} des={heroDes} pageUrl={heroPageUrl} />
            <OurVisionMission />
            <OurServices />
            <OurCoreValue />
            <JoinUs />
        </>
    )
}

export default NibeditaMentalHealthCenter