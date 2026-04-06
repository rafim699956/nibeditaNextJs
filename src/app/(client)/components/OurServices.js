import React from 'react'
import SectionTitle from './SectionTitle'

const OurServices = ({ secTitle, secDes, service }) => {
    const services = [
        { id: 1, title: "service 1", icon: "", list: ["service 1", "service 2", "service 3"] },
        { id: 2, title: "service 1", icon: "" },
        { id: 3, title: "service 1", icon: "" },
        { id: 4, title: "service 1", icon: "" },
        { id: 5, title: "service 1", icon: "" },
    ];
    return (
        <section className='bg-[#F6EFF8] lg:pt-37 lg:pb-27'>
            <div className='container space-y-6 md:space-y-10 lg:space-y-14'>
                <SectionTitle title={secTitle} description={secDes} />
                {services &&
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        {services.map((service) => (
                            <div key={service.id} className={`p-6 md:p-8 lg:p-10 bg-white border border-[#EDDEF0] flex gap-4 md:gap-6 lg:gap-8 ${service.list ? "items-start" : "items-center"}`}>
                                <div className='size-18 shri'></div>
                                <div className='grow space-y-4'>
                                    <h5>{service.title}</h5>
                                    {service.list && (
                                        <ul className='space-y-2 list-disc list-inside'>
                                            {service.list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        )
                        )}
                    </div>
                }
            </div>
        </section>
    )
}

export default OurServices