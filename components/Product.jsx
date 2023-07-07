import React from 'react'
import IgImg1 from '../public/ig-img-1.jpg';
import IgImg2 from '../public/ig-img-2.jpg';
import InstagramImg from './InstagramImg';
export default function Product() {
  return (
      <div className='max-w-[1240px] mx-auto text-center py-24'>
          <p className='text-2xl font-bold'>Suivez nous sur instagramme</p>
          <p className='pb-4'>@Aldini</p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 p-4'>
              <InstagramImg socialImg={IgImg1} />
              <InstagramImg socialImg={IgImg2} />
          </div>
      </div>
  )
}

