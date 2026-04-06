import React from 'react'
import Pagination from '../../components/Pagination';
import Image from 'next/image';
import singleImages from "../../../../../public/latestnews2.png"

const SingleBlogPage = () => {
    return (
        <>
            <section className="py-0">
                <div className="pt-10 pb-20 md:pb-40 lg:pb-52 bg-linear-to-b from-[#EDDEF0] from-[66.66%] to-[#FFFFFF] to-[100.88%]">
                    <div className="container space-y-6 md:space-y-8 lg:space-y-10">
                        <Pagination />
                        <div className="max-w-[58.188rem] mx-auto space-y-4 lg:space-y-6 text-center pb-4 md:pb-10 lg:pb-16">
                            <h1 className="text-center">
                                We take care of the communitys mental and physical health
                            </h1>
                            <h6 className='text-[#737373]'>July 31, 2025</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='lg:pt-16 -mt-20 md:-mt-30 lg:-mt-65.5 space-y-8 md:space-y-10 lg:space-y-16'>
                <div className="container">
                    <div className='rounded-lg overflow-hidden'>
                        <Image
                            className="w-full max-w-full object-cover h-auto"
                            width={100}
                            src={singleImages}
                            alt="nibedita"
                        />
                    </div>
                </div>
                <div className="container max-w-206! single-blog-content space-y-4 lg:space-y-6">
                    <h3>Heading Goes Hear</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3>Heading Goes Hear</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Image
                        className="w-full max-w-full object-cover h-auto"
                        width={100}
                        src={singleImages}
                        alt="nibedita"
                    />
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>
        </>
    )
}

export default SingleBlogPage;