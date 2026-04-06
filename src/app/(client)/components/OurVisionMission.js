import React from 'react'
import SectionTitle from './SectionTitle'
import ourVisionIcon from "../../../../public/our-vision.png"
import ourMissionIcon from "../../../../public/our-mission.png"
import ourMissionVissionBg from "../../../../public/ourMissionVissionBg.png"
import Image from 'next/image'

const OurVisionMission = ({ secTitle, secDes, vision, mission }) => {
    return (
        <section className='lg:pt-11 pb-0 space-y-6 md:space-y-10 lg:space-y-14'>
            <div className='container'>
                <SectionTitle title={secTitle} description={secDes} />
            </div>
            <div style={{backgroundImage: `url(${ourMissionVissionBg.src})`}} className='bg-cover bg-center bg-no-repeat min-h-160.25 flex items-end'>
                <div className='container grid grid-cols-1 md:grid-cols-2 -mb-6'>
                    <div className='p-6 md:p-10 lg:p-14 bg-primary-600 space-y-3'>
                        <div className='flex items-center gap-3'>
                            <Image className='size-10' src={ourVisionIcon} alt="Our Vision" width={40} height={40} />
                            <h5 className='text-white'>{vision?.title || "Our Vision"}</h5>
                        </div>
                        <p className='text-white'>{vision?.description || "To create a society where mental health is valued, understood, destigmatized and accessible to mental healthcare whenever needed; thereby empowering individuals to lead fulfilling and purposeful lives."}</p>
                    </div>
                    <div className='p-6 md:p-10 lg:p-14 bg-[#59355A] space-y-3'>
                        <div className='flex items-center gap-3'>
                            <Image className='size-10' src={ourMissionIcon} alt="Our Mission" width={40} height={40} />
                            <h5 className='text-white'>{mission?.title || "Our Mission"}</h5>
                        </div>
                        <p className='text-white'>{mission?.description || "Our mission is to offer standard psychological care that promotes people’s mental wellbeing across the lifespan. Through counseling, behavioral services and developmental assessments, we strive to enhance the mental well-being of our community by helping individuals to overcome challenges, build resilience, and lead more empowered lives."}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurVisionMission