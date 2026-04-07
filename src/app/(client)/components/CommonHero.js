import React from 'react'
import Pagination from './Pagination'
import Image from 'next/image'
import MentalHealthCare from "../../../../public/mental-health-care.png";
import Link from 'next/link';

const CommonHero = ({ title, des , pageUrl, image }) => {
    return (
        <section className="lg:pt-10 lg:pb-20 bg-linear-to-b from-[#EDDEF0] from-[66.66%] to-[#FFFFFF] to-[100.88%]">
            <div className="container space-y-6 md:space-y-8 lg:space-y-10">
                <Pagination />
                <div className={`flex flex-col-reverse md:flex-row lg:justify-between gap-10 ${des && pageUrl ? "lg:items-end" : "lg:items-center"}`}>
                    <div className={`lg:max-w-153.5 w-full ${des && pageUrl ? "lg:mb-4.5" : ""}`}>
                        <h1>
                            {title || "We take care of the communitys mental and physical health"}
                        </h1>
                        {des && <p className='mt-4'>{des}</p>}
                        {pageUrl && <Link className='mt-6 md:mt-8 lg:mt-12 py-3 px-6 bg-primary-600 rounded-[44px] inline-flex items-center gap-2 text-white font-medium text-base hover:bg-secondary hover:text-primary-100 transition-all duration-300 ease-linear w-full lg:w-auto justify-center' href={pageUrl}>Know More</Link>}
                    </div>
                    <div className='shrink-0 max-w-127 w-full rounded-lg overflow-hidden'>
                        <Image
                            className="w-full max-w-full object-cover"
                            width={100}
                            height={100}
                            alt={title}
                            src={image || MentalHealthCare}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommonHero