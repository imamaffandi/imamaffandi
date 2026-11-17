import { getGreeting } from '../constant'
import { Footer } from '@/components'
const About = () => {
    return (
        <>
            <main className='relative z-10 min-h-screen w-full bg-light'>
                {/* Welcome */}
                <p>Hi, {getGreeting()} <br />
                </p>
                <p className='absolute bottom-1 left-24 transform text-[0.60rem]'>No more self-destructive thoughts. We should realized that we often suffer more in our imagination than in reality. And despite the hardship in life, love abounds. And it can always get better.</p>
            </main>
            <Footer />
        </>
    )
}

export default About