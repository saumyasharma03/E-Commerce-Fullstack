import React from 'react'
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full '>
        <div className='max_padd_container relative top-32 xs:top-52'>
            <h1 className='h1 capitalize max-w-[37rem]'> Digital Shopping Hub Juncton</h1>
            <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt fuga enim. Praesentium, excepturi natus perferendis adipisci nobis id amet illo odit! Eveniet ipsum amet sint eligendi officia, commodi dolorum?</p>
            <div className='flexStart !items-center gap-x-4 my-10'>
                <div className='!regular-25 flexCenter gap-x-3'>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                </div>
                <div className='bold-16 sm:bold-20'>
                    176k <span className='regular-16 sm:regular-20'> Excellent Reviews</span>
                </div>
                <div className='max-xs:flex-col flex gap-2'>
                    <NavLink to={''} className={'btn_dark_rounded flexCenter'}>
                        Shop Now
                    </NavLink>
                    <NavLink to={''} className={'btn_dark_rounded flexCenter gap-x-2'}>
                        <MdOutlineLocalOffer className='text-2xl'/>
                        Offers
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero