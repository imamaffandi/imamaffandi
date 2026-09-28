import React, { useState } from 'react'
import { Nav, Noise } from '../components'
import { social } from '../constant'
const Contact = () => {
    const [hover, setHover] = useState(null);
    return (
        <div className='bg-light w-full h-screen flex items-center justify-center overflow-hidden'><Noise />
            <main className='rounded-xl bg-dark w-2/3 h-2/3 relative'>
                <h1 className='text-light font-display font-black text-8xl p-2'>Let's Get Touched</h1>
                <p className='text-light font-text text-md pt-3 px-2'>Message me via <span><a className='font-bold underline tracking-wider italic' href='https://wa.me/6281230677319' target='_blank'>Whatsapp</a></span> </p>
                <div className='absolute bottom-0 left-0 flex w-full justify-between items-baseline p-5'>
                    {social.map((i, index) => {
                        return (
                            <a key={index} onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(null)}
                                className={` transition duration-200 text-light font-text text-xs
                            ${hover !== null && hover !== index ? ' opacity-80 blur-[1px]' : ''}`} href={i.link} target='_blank'>{i.title}</a>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default Contact