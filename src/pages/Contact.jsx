import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { links, social } from '../constant'
import { skybg } from '../assets'
import { gsap, useGSAP, MOTION_OK } from '../lib/motion'

const WHATSAPP = 'https://wa.me/6281230677319'

const COLUMNS = [
    { title: 'Pages', items: links.map((i) => ({ label: i.title, to: i.link })) },
    { title: 'Social', items: social.slice(0, 3).map((i) => ({ label: i.title, href: i.link })) },
    { title: 'Contact', items: social.slice(3).map((i) => ({ label: i.title, href: i.link })), wide: true },
]

const linkClass = 'text-white/85 transition-colors duration-200 hover:text-white'

const Contact = () => {
    const scope = useRef(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add(MOTION_OK, () => {
            gsap.timeline({ defaults: { ease: 'expo.out' } })
                // fromTo, not from: an explicit end value can't capture a half-hidden state on StrictMode re-runs
                .fromTo('[data-reveal]', { y: 32, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.08 })
        })
    }, { scope })

    return (
        <main
            ref={scope}
            className='flex h-dvh w-full flex-col justify-between overflow-hidden bg-sky bg-cover bg-center px-5 pt-20 pb-4 text-white md:px-10 md:pt-28 md:pb-6'
            style={{ backgroundImage: `url(${skybg})`, backgroundPosition: 'bottom' }}>
            <section className='flex flex-col gap-4 md:gap-8'>
                <h1 data-reveal className='font-display text-5xl leading-[1.05] tracking-tight md:text-8xl'>
                    Let's get in touch.
                </h1>
                <p data-reveal className='max-w-[42ch] font-text text-xs leading-relaxed text-white/90 md:text-sm'>
                    Tell me about the site you have in mind. WhatsApp is the fastest way to reach me.
                </p>
                {/* Reveal lives on the wrapper so GSAP's opacity tween doesn't fight the link's hover transition */}
                <div data-reveal>
                    <a
                        href={WHATSAPP}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block font-display text-2xl text-white underline decoration-1 underline-offset-8 transition-opacity duration-200 hover:opacity-75 md:text-4xl'>
                        Message on WhatsApp →
                    </a>
                </div>
            </section>

            <section>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start md:gap-12'>
                    <div data-reveal className='flex flex-col gap-4 md:col-span-4'>
                        <span className='font-display text-3xl'>Imam Affandi</span>
                        <p className='hidden max-w-[34ch] font-text text-xs leading-relaxed text-white/85 sm:block'>
                            Frontend developer building fast, motion-rich websites for studios, creators and growing businesses.
                        </p>
                    </div>
                    <nav aria-label='Contact links' className='grid grid-cols-2 gap-x-8 gap-y-5 font-text text-xs sm:grid-cols-3 md:col-span-7 md:col-start-6'>
                        {COLUMNS.map((column) => (
                            <div key={column.title} data-reveal className={`flex flex-col gap-2 md:gap-3 ${column.wide ? 'col-span-2 sm:col-span-1' : ''}`}>
                                <h2 className='font-medium text-white'>{column.title}</h2>
                                <ul className={`flex gap-2 ${column.wide ? 'flex-wrap gap-x-4 sm:flex-col sm:gap-x-2' : 'flex-col'}`}>
                                    {column.items.map((item) => (
                                        <li key={item.label}>
                                            {item.to
                                                ? <Link to={item.to} className={linkClass}>{item.label}</Link>
                                                : <a href={item.href} target='_blank' rel='noopener noreferrer' className={linkClass}>{item.label}</a>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
                <div data-reveal className='mt-6 flex flex-col-reverse items-center gap-3 font-text text-[11px] text-white/80 sm:flex-row sm:justify-between md:mt-10'>
                    <p>© {new Date().getFullYear()} Imam Affandi. All rights reserved.</p>
                    <Link to='/terms' className='text-white/90 underline underline-offset-4 transition-colors duration-200 hover:text-white'>
                        Terms of Service
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Contact
