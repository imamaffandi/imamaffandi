import React from 'react'
import { image1, image2, image3, image4, image5, bg } from '../assets'
import { Noise, CTA } from '../components'
import data from '../data/projects.json'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main
            className='bg-light h-screen w-full overflow-hidden relative flex justify-center items-center'>
            <Noise />
            <CTA />
            <img src={image1} alt="" className='aspect-video w-1/2 object-cover' />
            <div className='absolute right-2 bottom-2 flex flex-col items-end justify-end font-text tracking-wide text-xs'>
                {data.map((i, index) => {
                    return (
                        <Link key={index} className='cursor-pointer transition duration-200 hover:-translate-x-0.5' to={`projects/${i.path}`}>{i.title}</Link>
                    )
                })}
            </div>
        </main>
    )
}

export default Home