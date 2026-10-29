import React from 'react'
import { getGreeting } from '../constant'
import { Footer } from '../components'
const About = () => {
    return (
        <div className='relative min-h-screen w-full'>
            {/* Welcome */}
            <p>Hi, {getGreeting()} <br />
            </p>
            <p className='absolute bottom-1 left-24 transform text-[0.60rem]'>No more self-destructive thoughts. This man has realized that we often suffer more in our imagination than in reality. And despite the hardship in life, love abounds. And it can always get better.</p>
            {/* <Footer /> */}
        </div>
    )
}

export default About