import React, { useRef } from 'react'
import { Footer, WorkGrid } from '../components'
import { skills, services, getAge, getGreeting, steps } from '../constant'
import { gsap, useGSAP, MOTION_OK, revealOnScroll } from '../lib/motion'

const HEADLINE = [
    { text: 'I build websites that load fast,' },
    { text: 'move with intent,', italic: true },
    { text: 'and stay easy to maintain.' },
]

// "Web app (React / Next.js)" -> name + parenthetical note
const splitService = (service) => {
    const [name, note] = service.split(/\s*\((.*)\)\s*$/)
    return { name, note }
}

const About = () => {
    const scope = useRef(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add(MOTION_OK, () => {
            gsap.timeline({ defaults: { ease: 'expo.out' } })
                .from('[data-word]', { yPercent: 110, duration: 1.1, stagger: 0.025 })
                .from('[data-intro-meta]', { autoAlpha: 0, y: 12, duration: 0.8 }, '-=0.8')

            gsap.to('[data-marquee]', { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
            revealOnScroll(scope.current)
        })
    }, { scope })

    return (
        <div ref={scope} className='w-full bg-light'>
            {/* Intro */}
            <section className='flex min-h-[85dvh] flex-col justify-end gap-10 px-5 pt-28 pb-20 md:px-10 md:pt-24 md:pb-28'>
                <h1 className='max-w-[20ch] font-display text-[clamp(2.5rem,6.2vw,6.5rem)] leading-[1.05] tracking-tight'>
                    {HEADLINE.map((part) => part.text.split(' ').map((word, index) => (
                        <span key={`${part.text}-${index}`} className='inline-block overflow-hidden pb-[0.12em] align-top'>
                            <span data-word className={`inline-block ${part.italic ? 'italic' : ''}`}>{word}&nbsp;</span>
                        </span>
                    )))}
                </h1>
                <p data-intro-meta className='max-w-[52ch] font-text text-sm leading-relaxed text-dark/75'>
                    {getGreeting()}, I'm Imam Affandi. {getAge('01-01-2022')}+ years in web development, mostly on the frontend, working with studios, creators and small businesses.
                </p>
            </section>

            {/* Stack */}
            <section aria-label='Tools I work with' className='overflow-hidden border-y border-dark/15 py-8 md:py-12'>
                <div data-marquee className='flex w-max'>
                    {[0, 1].map((copy) => (
                        <ul key={copy} aria-hidden={copy === 1} className='flex shrink-0 items-center'>
                            {skills.map((skill) => (
                                <li key={skill} className='px-6 font-display text-5xl italic md:px-10 md:text-7xl'>{skill}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section className='px-5 py-24 md:px-10 md:py-32'>
                <h2 data-reveal className='mb-14 font-display text-4xl leading-[1.05] md:mb-20 md:text-6xl'>What I can help with</h2>
                <ul className='grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 md:gap-y-14'>
                    {services.map((service) => {
                        const { name, note } = splitService(service)
                        return (
                            <li key={service} data-reveal className='flex flex-col gap-2'>
                                <span className='font-display text-2xl leading-[1.15] md:text-4xl'>{name}</span>
                                {note && <span className='font-text text-xs text-dark/60'>{note}</span>}
                            </li>
                        )
                    })}
                </ul>
            </section>

            {/* Process */}
            <section className='grid grid-cols-1 gap-12 border-t border-dark/15 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32'>
                <div className='md:col-span-4'>
                    <h2 className='font-display text-4xl leading-[1.05] md:sticky md:top-24 md:text-6xl'>How a project runs</h2>
                </div>
                <ol className='flex flex-col gap-16 md:col-span-7 md:col-start-6'>
                    {steps.map((step) => (
                        <li key={step.title} data-reveal className='flex flex-col gap-4'>
                            <h3 className='font-display text-3xl italic leading-[1.1] md:text-4xl'>{step.title}</h3>
                            <p className='max-w-[56ch] font-text text-sm leading-relaxed text-dark/75'>{step.desc}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Work */}
            <section className='border-t border-dark/15 px-5 py-24 md:px-10 md:py-32'>
                <h2 data-reveal className='mb-14 font-display text-4xl leading-[1.05] md:mb-20 md:text-6xl'>Recent work</h2>
                <WorkGrid />
            </section>

            <Footer />
        </div>
    )
}

export default About
