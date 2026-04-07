import React from 'react'
import CommonHero from '../components/CommonHero'
import OurVisionMission from '../components/OurVisionMission'
import OurServices from '../components/OurServices'
import OurCoreValue from '../components/OurCoreValue'

const PhysiotherapyPage = () => {
    return (
        <>
            <CommonHero title="Where Every Meal Feels Like Home" />
            <OurVisionMission />
            <OurServices />
            <OurCoreValue />
        </>
    )
}

export default PhysiotherapyPage