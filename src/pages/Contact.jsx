import React, { useState } from 'react'
import { Noise } from '../components'
import { social } from '../constant'
import { videobg } from '../assets';
const Contact = () => {
    const [hover, setHover] = useState(null);
    return (
        <div className='bg-light w-full h-screen flex items-center justify-center overflow-hidden'>
            <video src={videobg} muted loop autoPlay className='w-full h-full object-cover absolute top-0 left-0' />
            <Noise />
            <main className='rounded-xl bg-dark w-2/3 h-2/3 relative overflow-hidden flex flex-col items-statrt justify-between'>
                <div className="w-full absolute top-0 left-0 ">
                    <svg
                        viewBox="0 0 1200 300"
                        className="block h-auto w-full"
                    >
                        <defs>
                            <mask id="video-text-mask">
                                <rect
                                    width="1200"
                                    height="300"
                                    fill="black"
                                />

                                <text
                                    x="600"
                                    y="150"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="white"
                                    className="font-black text-9xl"
                                // style={{ fontSize: "100%" }}
                                >
                                    Let’s Get in Touch
                                </text>
                            </mask>
                        </defs>

                        <foreignObject
                            width="1200"
                            height="300"
                            mask="url(#video-text-mask)"
                        >
                            <video
                                xmlns="http://www.w3.org/1999/xhtml"
                                src={videobg}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        </foreignObject>
                    </svg>
                </div>
                <p className='z-2 text-light font-text text-left text-md pt-3 px-2'>Everybody knows where they want to go. But sometimes you need a guide who knows how to get there.</p>
                {/* <p className='z-2 text-light font-text text-md pt-3 px-2'>Message me via <span><a className='font-bold underline tracking-wider italic' href='https://wa.me/6281230677319' target='_blank'>Whatsapp</a></span> </p> */}
                <div className='w-full flex items-center justify-center'>
                    <a href='https://wa.me/6281230677319' target='_blank' className='z-2 bg-light text-dark font-display cursor-pointer p-1'>Whatsapp</a>
                </div>
                <div className='z-2 flex w-full justify-between items-baseline p-5'>
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