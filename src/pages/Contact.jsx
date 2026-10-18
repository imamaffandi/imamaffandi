import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Noise } from '../components'
import { links, social } from '../constant'
import { bg, videobg } from '../assets'
import { gsap, useGSAP, MOTION_OK } from '../lib/motion'

const WHATSAPP = 'https://wa.me/6281230677319'

// Seeded so the ripped paper edge is irregular but identical on every render
const buildTornEdge = (steps = 56, seed = 11) => {
    let state = seed
    const random = () => {
        state = (state * 16807) % 2147483647
        return state / 2147483647
    }
    const edge = Array.from({ length: steps + 1 }, (_, index) => {
        const x = 100 - (index / steps) * 100
        const depth = 30 + Math.sin(index * 0.42) * 14 + (random() - 0.5) * 18
        return `${x.toFixed(2)}% calc(100% - ${depth.toFixed(1)}px)`
    })
    return `polygon(0% 0%, 100% 0%, ${edge.join(', ')})`
}

const TORN_EDGE = buildTornEdge()

const COLUMNS = [
    { title: 'Pages', items: links.map((i) => ({ label: i.title, to: i.link })) },
    { title: 'Social', items: social.slice(0, 3).map((i) => ({ label: i.title, href: i.link })) },
    { title: 'Contact', items: social.slice(3).map((i) => ({ label: i.title, href: i.link })), wide: true },
]

const linkClass = 'text-light/80 transition-colors duration-200 hover:text-light'

const Contact = () => {
    const scope = useRef(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add(MOTION_OK, () => {
            gsap.timeline({ defaults: { ease: 'expo.out' } })
                .from('[data-paper]', { yPercent: -100, duration: 1.3 })
                .from('[data-paper-item]', { y: 32, autoAlpha: 0, duration: 1, stagger: 0.08 }, '-=0.7')
                .from('[data-ground]', { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.06 }, '-=0.8')
        })
    }, { scope })

    return (
        <main ref={scope} className='relative flex h-dvh w-full flex-col justify-between overflow-hidden bg-dark text-light'>
            <video src={videobg} autoPlay muted loop playsInline aria-hidden='true' className='absolute inset-0 h-full w-full object-cover' />
            <div aria-hidden='true' className='absolute inset-0 bg-linear-to-t from-dark/85 via-dark/15 to-transparent' />
            <div className='pointer-events-none absolute inset-0'>
                <Noise />
            </div>

            {/* Torn paper sheet; the shadow sits on the wrapper so the clip-path doesn't cut it off */}
            <div data-paper className='relative shrink-0 drop-shadow-[0_10px_14px_rgba(44,52,36,0.45)]'>
                <section
                    className='bg-light bg-cover bg-center px-5 pt-20 pb-16 text-dark md:px-10 md:pt-24 md:pb-24'
                    style={{ backgroundImage: `url(${bg})`, clipPath: TORN_EDGE }}>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end md:gap-8'>
                        <h1 data-paper-item className='font-display text-4xl leading-[1.05] tracking-tight md:col-span-7 md:text-7xl lg:text-8xl'>
                            Let's get in touch.
                        </h1>
                        <div data-paper-item className='flex flex-col items-start gap-4 md:col-span-4 md:col-start-9 md:gap-6'>
                            <p className='max-w-[42ch] font-text text-xs leading-relaxed text-dark/75 md:text-sm'>
                                Tell me about the site you have in mind. WhatsApp is the fastest way to reach me.
                            </p>
                            <a
                                href={WHATSAPP}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='rounded-full bg-dark px-6 py-3 font-text text-sm whitespace-nowrap text-light transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]'>
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Ground: brand on the left, link columns on the right */}
            <section className='relative px-5 pb-4 md:px-10 md:pb-6'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start md:gap-12'>
                    <div data-ground className='flex flex-col gap-4 md:col-span-4'>
                        <div className='flex items-center gap-3'>
                            <img src={`${import.meta.env.BASE_URL}icon.ico`} alt='' className='size-8' />
                            <span className='font-display text-3xl'>Imam Affandi</span>
                        </div>
                        <p className='hidden max-w-[34ch] font-text text-xs leading-relaxed text-light/80 sm:block'>
                            Frontend developer building fast, motion-rich websites for studios, creators and growing businesses.
                        </p>
                    </div>
                    <nav aria-label='Contact links' className='grid grid-cols-2 gap-x-8 gap-y-5 font-text text-xs sm:grid-cols-3 md:col-span-7 md:col-start-6'>
                        {COLUMNS.map((column) => (
                            <div key={column.title} data-ground className={`flex flex-col gap-2 md:gap-3 ${column.wide ? 'col-span-2 sm:col-span-1' : ''}`}>
                                <h2 className='font-medium text-light'>{column.title}</h2>
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
                <div data-ground className='mt-6 flex flex-col-reverse items-center gap-3 font-text text-[11px] text-light/70 sm:flex-row sm:justify-between md:mt-10'>
                    <p>© {new Date().getFullYear()} Imam Affandi. All rights reserved.</p>
                    <Link to='/terms' className='rounded-full border border-light/30 px-4 py-1.5 text-light/90 transition-colors duration-200 hover:bg-light hover:text-dark'>
                        Terms of Service
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Contact
