import React from 'react'
import { image1, image2, image3, image4, image5, bg } from '../assets'
import { Noise } from '../components'

const Home = () => {
    return (
        <main
            // style={{ '--image-url': `url(${bg})` }}
            // className='relative bg-(image:--image-url) w-full h-screen overflow-hidden flex items-start justify-center'>
            className='bg-light h-screen'>
            <Noise />
        </main>
    )
}

export default Home