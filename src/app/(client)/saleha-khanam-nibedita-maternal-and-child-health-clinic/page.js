import React from 'react'
import CommonHero from '../components/CommonHero'
import OurVisionMission from '../components/OurVisionMission'
import OurServices from '../components/OurServices'
import OurCoreValue from '../components/OurCoreValue'

const ChildHealthPage = () => {
    return (
        <>
            <CommonHero title="Dedicated to your health, committed to your trust" />
            <OurVisionMission />
            <OurServices />
            <OurCoreValue />
        </>
    )
}

export default ChildHealthPage