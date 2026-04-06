import React from 'react'
import Pagination from '../../components/Pagination';
import Image from 'next/image';
import singleImages from "../../../../../public/latestnews2.png"
import Link from 'next/link';

const SingleTeamDetailPage = () => {
  return (
    <section className="py-0">
      <div className="pt-10 pb-10 md:pb-30 lg:pb-52 bg-linear-to-b from-[#EDDEF0] from-[66.66%] to-[#FFFFFF] to-[100.88%]">
        <div className="container space-y-6 md:space-y-10 lg:space-y-15">
          <Pagination />
          <div className='flex flex-col-reverse md:flex-row md:justify-between gap-6 md:gap-8 lg:gap-10'>
            <div className="max-w-185 w-full space-y-4 md:space-y-8 lg:space-y-14">
              <div className='space-y-3'>
                <h1>Dr. Zeenat Sultana</h1>
                <p>Program Director & DCEO</p>
              </div>
              <div className='flex flex-col gap-1 lg:gap-2'>
                <Link className='h6' href={`tell:+88 01677787879`}>+88 01677787879</Link>
                <Link className='h6' href={`mailto:username@email.com`}>username@email.com</Link>
                <Link className='h6' href={`#`}>Linkeding.com/username</Link>
              </div>
              <div className='space-y-3 lg:space-y-5'>
                <h5>Bio</h5>
                <div className="space-y-4 lg:space-y-6">
                  <p>Lorem ipsum dolor sit amet consectetur. Urna sed duis ipsum suscipit ullamcorper nunc. Morbi et amet nibh mauris libero velit facilisis. Orci in in at a congue ullamcorper sed donec tellus. Mollis congue aliquam volutpat dictum pretium. Aliquam venenatis arcu sed eget fringilla sem urna.</p>
                  <p>Lorem ipsum dolor sit amet consectetur. Urna sed duis ipsum suscipit ullamcorper nunc. Morbi et amet nibh mauris libero velit facilisis. Orci in in at a congue ullamcorper sed donec tellus. Mollis congue aliquam volutpat dictum pretium. Aliquam venenatis arcu sed eget fringilla sem urna.</p>

                </div>
              </div>
            </div>
            <div className='max-w-100.5 w-full'>
              <Image
                className="w-full max-w-full object-cover"
                width={`100%`}
                height={`100%`}
                src={singleImages}
                alt="nibedita"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleTeamDetailPage