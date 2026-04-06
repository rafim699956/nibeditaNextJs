import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import icon from "../../../../public/icon1.png";

const OurCoreValue = ({ secTitle, secDes, values = [
    { id: 1, title: "Core Value 1", icon: icon },
    { id: 2, title: "Core Value 2", icon: icon },
    { id: 3, title: "Core Value 3", icon: icon },
    { id: 4, title: "Core Value 4", icon: icon },
] }) => {
    return (
        <section className='bg-primary-600'>
            <div className="container space-y-6 md:space-y-10 lg:space-y-14">
                <SectionTitle title={secTitle} description={secDes} varient='white' position='left' />
                {values && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                        {values.map((value) => (
                            <div key={value.id} className='lg:py-5 lg:px-10 bg-white rounded-lg flex flex-col gap-5 items-center text-center'>
                                <Image src={value.icon} width={96} height={96} alt={value.title} className='size-24' />
                                <h6>{value.title}</h6>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default OurCoreValue