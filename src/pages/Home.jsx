import React, { useState } from 'react'
import { bg } from '../assets'
import { Noise, CTA } from '../components'
import { data } from '../data/projects'
import { Link } from 'react-router-dom'

const Home = () => {
    const [hover, setHover] = useState()
    return (
        <main
            className='bg-light h-screen w-full overflow-hidden relative flex justify-center items-center'>
            <Noise />
            {/* <CTA /> */}
            {/* <img src={currentImage} alt="" className='aspect-video w-1/2 object-cover' /> */}
            <div className='relative aspect-video w-1/2'>
                <img
                    src={bg}
                    alt=''
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hover ? 'opacity-0' : 'opacity-100'}`}
                />
                {data.map((i) => (
                    <img
                        key={i.id}
                        src={i.image}
                        alt={i.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hover?.id === i.id ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
            <div className='absolute right-2 bottom-2 flex flex-col items-end justify-end font-text tracking-wide text-xs'>
                {data.map((i, index) => {
                    return (
                        <Link key={index}
                            className=' cursor-pointer transition duration-200 hover:-translate-x-0.5'
                            to={`projects/${i.path}`}
                            onMouseEnter={() => setHover(i)}
                            onMouseLeave={() => setHover(i)}>{i.title}</Link>
                    )
                })}
            </div>
        </main>
    )
}

export default Home