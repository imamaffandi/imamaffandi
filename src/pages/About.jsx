import React from 'react'
import { Nav } from '../components'
import { skills, services, getAge, social, getGreeting } from '../constant'
const About = () => {
    return (
        <div className='w-full bg-light min-h-screen'>
            {/* Section 1 - About */}
            <section className='p-10 text-3xl tracking-wider leading-10 font-text text-justify'>
                Hi, {getGreeting()}. Welcome to my personalized portfolio. Why I called it personalized because my previous portfolio site kinda boring. Like, you know, text at left and big image on the right, wide navbar on top and has many meaningless pages. But now, I made simply page with my personal touch.<br /> Like old man said <span className='bg-black rounded-xl text-light'>"Touch someone before touching yourself"</span>
            </section>
        </div>
    )
}

export default About