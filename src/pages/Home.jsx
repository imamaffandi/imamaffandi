import React from 'react'
import { image1, image2, image3, image4, image5, bg } from '../assets'
import { Noise, Roll, CTA } from '../components'

const Home = () => {
    return (
        <main
            className='bg-light h-screen w-full overflow-hidden relative flex justify-start items-center'>
            <img src={image1} alt="" className='object-cover h-[65dvh] w-2/3 pl-20' />
            <Noise />
            <CTA />
            <Roll
                items={['Ambient', 'House', 'Techno', 'Jazz']}
                defaultSelected={2}
                textColor="#a6a6a6"
                activeColor="#000000"
                side="right"
                fontSize={5}
                spacing={1.4}
                curve={1}
                tilt={6}
                blur={2}
                fade={0.25}
                smoothing={200}
                inset={80}
                loop={false}
                draggable
                //   soundUrl="/assets/sounds/click-soft.mp3"
                soundVolume={0.5}
                onChange={(index, item) => console.log(index, item)} />
        </main>
    )
}

export default Home