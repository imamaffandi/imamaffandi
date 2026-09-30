import React from 'react'
import { social } from '../constant'

const Footer = () => {
    return (
        <main className='relative min-h-screen w-full bg-light'>
            {/* <img src='/icon.ico' className='w-full object-contain' /> */}
            {/* Namecard */}
            <section className='absolute top-3 left-3 flex flex-col items-start justify-start gap-2'>
                <div className='flex items-end justify-start leading-3 gap-2'>
                    <p className='text-md font-text font-semibold tracking-wider'>Imam Affandi</p>
                </div>
                <p className='w-56 text-xs font-text '>I created beautiful, functional, excellent, smooth, extraordinary, and working webapp for you</p>
            </section>
            <p>Everybody knows where they want to go. But sometimes you need a guide who knows how to get there.</p>
            <p>Let’s connect on purpose and explore your journey together.</p>
            <button>Gooooo</button>
            <section>
                {social.map((i, index) => {
                    return (
                        <div key={index}>
                            <a href={i.link}>{i.title}</a>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}

export default Footer 