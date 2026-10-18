import React, { useEffect, useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Footer, WorkGrid } from '../components'
import { steps } from '../constant'
import { data, getHostname, getProjectSummary } from '../data/projects'
import { gsap, ScrollTrigger, useGSAP, MOTION_OK, revealOnScroll } from '../lib/motion'

const pillClass = 'rounded-full px-6 py-3 font-text text-sm whitespace-nowrap transition-[translate,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98]'
const easeOut = 'ease-[cubic-bezier(0.16,1,0.3,1)]'

const ProjectDetail = ({ project }) => {
    const scope = useRef(null)
    const { state } = useLocation()
    // Arriving from Home, the image is already fullscreen, so skip its own reveal
    const isExpanded = Boolean(state?.expanded)
    const others = data.filter((i) => i.id !== project.id)
    const next = data[(data.indexOf(project) + 1) % data.length]
    const { built, outcome } = getProjectSummary(project)
    const resultWords = outcome
        ? `The result: ${outcome.charAt(0).toLowerCase()}${outcome.slice(1)}`.split(' ')
        : []

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add(MOTION_OK, () => {
            const intro = gsap.timeline({ defaults: { ease: 'expo.out' } })
            if (!isExpanded) {
                intro.from('[data-hero-image]', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.2, ease: 'expo.inOut' })
            }
            intro
                .from('[data-hero-scrim]', { autoAlpha: 0, duration: 0.8, ease: 'power2.out' }, isExpanded ? 0 : '-=0.5')
                .from('[data-hero-line]', { yPercent: 110, duration: 1.1 }, '<0.1')
                .from('[data-hero-meta]', { autoAlpha: 0, y: 12, duration: 0.8 }, '<0.3')

            gsap.to('[data-hero-image]', {
                yPercent: 12,
                ease: 'none',
                scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: true },
            })

            // Each word of the result statement brightens in reading order as it scrolls through
            gsap.fromTo('[data-scrub-word]', { opacity: 0.1 }, {
                opacity: 1,
                stagger: 0.1,
                ease: 'none',
                scrollTrigger: { trigger: '[data-scrub]', start: 'top 80%', end: 'bottom 45%', scrub: true },
            })

            gsap.to('[data-marquee]', { xPercent: -50, duration: 24, ease: 'none', repeat: -1 })
            revealOnScroll(scope.current)
        })

        // Pinned heading only makes sense when it sits beside the list
        mm.add(`${MOTION_OK} and (min-width: 768px)`, () => {
            const heading = scope.current.querySelector('[data-pin]')
            const list = scope.current.querySelector('[data-pin-list]')
            ScrollTrigger.create({
                trigger: heading,
                start: 'top top+=96',
                end: () => `+=${Math.max(0, list.offsetHeight - heading.offsetHeight)}`,
                pin: true,
                pinSpacing: false,
                invalidateOnRefresh: true,
            })
        })
    }, { scope })

    return (
        <div ref={scope} className='w-full max-w-full overflow-x-hidden bg-light'>
            {/* Attention: same full-bleed image the Home frame expanded into */}
            <section data-hero className='relative flex h-dvh w-full items-center justify-center overflow-hidden bg-dark'>
                <img
                    data-hero-image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    className='absolute inset-0 h-full w-full object-cover'
                />
                <div
                    data-hero-scrim
                    className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,52,36,0.78)_0%,rgba(44,52,36,0.45)_55%,rgba(44,52,36,0.25)_100%)]'
                />
                <div className='relative flex w-full max-w-6xl flex-col items-center gap-10 px-5 text-center text-light'>
                    <h1 className='overflow-hidden pb-2 font-display text-[clamp(3.5rem,9vw,9rem)] leading-none tracking-tight'>
                        <span data-hero-line className='block'>{project.title}</span>
                    </h1>
                    <div data-hero-meta className='flex flex-wrap items-center justify-center gap-3'>
                        <a href={project.link} target='_blank' rel='noopener noreferrer' className={`${pillClass} bg-light text-dark`}>
                            Visit live site
                        </a>
                        <Link to='/project' className={`${pillClass} border border-light/50 text-light hover:bg-light/10`}>
                            All projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Interest: 3x3 bento, image 2x2 + two 1x1 + one 3x1 row */}
            <section className='px-5 py-32 md:px-10 md:py-48'>
                <div className='grid grid-flow-dense grid-cols-1 gap-3 md:auto-rows-[minmax(16rem,auto)] md:grid-cols-3'>
                    <div data-reveal className='group min-h-80 overflow-hidden bg-dark md:col-span-2 md:row-span-2'>
                        <img
                            src={project.image}
                            alt={`${project.title} homepage`}
                            loading='lazy'
                            className={`h-full w-full object-cover contrast-110 saturate-[0.85] transition-[scale,filter] duration-700 ${easeOut} group-hover:scale-105 group-hover:saturate-100`}
                        />
                    </div>
                    <div data-reveal className='flex flex-col justify-between gap-10 bg-dark/5 p-6 md:p-8'>
                        <h2 className='font-text text-xs text-dark/60'>What I built</h2>
                        <p className='font-display text-2xl leading-[1.2]'>{built}</p>
                    </div>
                    <div data-reveal className='flex flex-col justify-between gap-10 bg-dark p-6 text-light md:p-8'>
                        <h2 className='font-text text-xs text-light/60'>Live at</h2>
                        <p className='font-display text-3xl leading-[1.1] break-words md:text-4xl'>{getHostname(project)}</p>
                    </div>
                    <div data-reveal className='flex items-center bg-dark/5 p-6 md:col-span-3 md:p-10'>
                        <p className='font-display text-4xl leading-[1.2] tracking-tight md:text-6xl'>
                            From first layout
                            <span
                                aria-hidden='true'
                                className='mx-3 inline-block h-[0.8em] w-[2.2em] rounded-full bg-cover bg-center align-middle'
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            to live launch.
                        </p>
                    </div>
                </div>
            </section>

            {/* Desire: scrubbed result statement */}
            {resultWords.length > 0 && (
                <section className='border-t border-dark/15 px-5 py-32 md:px-10 md:py-48'>
                    <p data-scrub className='mx-auto max-w-6xl font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.15] tracking-tight'>
                        {resultWords.map((word, index) => (
                            <span key={index} data-scrub-word>{word} </span>
                        ))}
                    </p>
                </section>
            )}

            {/* Desire: pinned heading beside the scrolling process */}
            <section className='grid grid-cols-1 gap-12 border-t border-dark/15 px-5 py-32 md:grid-cols-12 md:px-10 md:py-48'>
                <div className='md:col-span-5'>
                    <h2 data-pin className='max-w-[14ch] font-display text-4xl leading-[1.05] tracking-tight md:text-6xl'>
                        How {project.title} came together
                    </h2>
                </div>
                <ol data-pin-list className='flex flex-col gap-20 md:col-span-6 md:col-start-7'>
                    {steps.map((step) => (
                        <li key={step.title} data-reveal className='flex flex-col gap-4'>
                            <h3 className='font-display text-3xl italic leading-[1.1] md:text-5xl'>{step.title}</h3>
                            <p className='max-w-[56ch] font-text text-sm leading-relaxed text-dark/75'>{step.desc}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Other projects as slices that widen on hover */}
            <section className='border-t border-dark/15 px-5 py-32 md:px-10 md:py-48'>
                <h2 data-reveal className='mb-12 font-display text-4xl leading-[1.05] md:mb-16 md:text-6xl'>More work</h2>
                <ul className='flex flex-col gap-3 md:h-[70vh] md:flex-row'>
                    {others.map((other) => (
                        <li
                            key={other.id}
                            className={`group relative h-64 overflow-hidden bg-dark md:h-auto md:flex-1 md:transition-[flex-grow] md:duration-700 ${easeOut} md:hover:grow-[2.4] md:focus-within:grow-[2.4]`}>
                            <Link to={`/projects/${other.path}`} className='absolute inset-0 flex flex-col justify-end p-6 text-light md:p-8'>
                                <img
                                    src={other.image}
                                    alt=''
                                    loading='lazy'
                                    className={`absolute inset-0 h-full w-full object-cover opacity-70 transition-[scale,opacity] duration-700 ${easeOut} group-hover:scale-105 group-hover:opacity-90`}
                                />
                                <div className='absolute inset-0 bg-linear-to-t from-dark/85 via-dark/10 to-transparent' />
                                <span className='relative font-display text-3xl leading-[1.1] md:text-4xl'>{other.title}</span>
                                <span className='relative mt-2 max-w-[40ch] font-text text-xs leading-relaxed text-light/80 md:translate-y-2 md:opacity-0 md:transition-[opacity,translate] md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100'>
                                    {getProjectSummary(other).built}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Action: next project marquee */}
            <Link
                to={`/projects/${next.path}`}
                aria-label={`Next project: ${next.title}`}
                className='group block overflow-hidden border-t border-dark/15 py-16 md:py-24'>
                <span className='mb-6 block px-5 font-text text-xs text-dark/60 md:px-10'>Next project</span>
                <div data-marquee className='flex w-max'>
                    {[0, 1].map((copy) => (
                        <span key={copy} aria-hidden='true' className='flex shrink-0 items-center'>
                            {Array.from({ length: 4 }, (_, index) => (
                                <span key={index} className='flex items-center gap-8 pr-8 font-display text-6xl italic leading-[1.15] md:gap-12 md:pr-12 md:text-9xl'>
                                    {next.title}
                                    <span
                                        className={`inline-block h-[0.6em] w-[1.6em] rounded-full bg-cover bg-center transition-transform duration-700 ${easeOut} group-hover:scale-110`}
                                        style={{ backgroundImage: `url(${next.image})` }}
                                    />
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </Link>
            <Footer />
        </div>
    )
}

const ProjectIndex = () => {
    const scope = useRef(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add(MOTION_OK, () => {
            gsap.from('[data-index-title]', { yPercent: 110, duration: 1.1, ease: 'expo.out' })
            revealOnScroll(scope.current)
        })
    }, { scope })

    return (
        <div ref={scope} className='bg-light'>
            <main className='px-5 pt-28 pb-24 md:px-10 md:pt-24 md:pb-32'>
                <h1 className='mb-16 overflow-hidden pb-2 font-display text-6xl leading-none tracking-tight md:mb-24 md:text-8xl'>
                    <span data-index-title className='block'>Selected work</span>
                </h1>
                <WorkGrid />
            </main>
            <Footer />
        </div>
    )
}

const ProjectMissing = () => (
    <main className='flex min-h-dvh flex-col items-start justify-center gap-8 bg-light px-5 md:px-10'>
        <h1 className='font-display text-5xl leading-[1.05] md:text-7xl'>This project doesn't exist.</h1>
        <Link to='/project' className={`${pillClass} bg-dark text-light`}>See all projects</Link>
    </main>
)

const Projects = () => {
    const { path } = useParams()
    if (!path) return <ProjectIndex />

    const project = data.find((i) => i.path === path)
    if (!project) return <ProjectMissing />

    // Keyed so moving to another project remounts and replays the intro
    return <ProjectDetail key={project.id} project={project} />
}

export default Projects
