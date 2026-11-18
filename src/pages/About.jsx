import { useRef, useState } from 'react'
import { Footer } from '@/components'
import { gsap, useGSAP, MOTION_OK, revealOnScroll } from '@/lib/motion'
import { portrait, portraitRed, view, work as workBackdrop } from '@/assets'
import { about } from '@/constant'

const { statements, profile, services, journey, heroShots, work, figures, hobbies, albums } = about

// Layout only: where each floating image sits and how deep it reads (higher speed = closer)
const HERO_SLOTS = [
    { className: 'top-[14%] left-[5%] w-[13vw] aspect-4/3', speed: 0.6 },
    { className: 'top-[20%] right-[6%] w-[11vw] aspect-4/5', speed: 1.2 },
    { className: 'bottom-[14%] left-[14%] w-[9vw] aspect-square', speed: 1 },
    { className: 'bottom-[20%] right-[16%] w-[12vw] aspect-4/3', speed: 0.4 },
]

const WORK_SLOTS = [
    { className: 'md:col-span-5 aspect-4/3', speed: 0.2 },
    { className: 'md:col-span-3 md:col-start-7 md:mt-[24vh] aspect-3/4', speed: 0.8 },
    { className: 'md:col-span-3 md:col-start-10 md:-mt-[6vh] aspect-4/5', speed: 0.45 },
]

const FIGURE_SLOTS = [
    { className: 'top-[6%] left-[4%] w-[12vw]', speed: 0.9 },
    { className: 'top-[10%] right-[8%] w-[10vw]', speed: 0.4 },
    { className: 'bottom-[6%] left-[18%] w-[9vw]', speed: 1.3 },
    { className: 'bottom-[10%] right-[4%] w-[13vw]', speed: 0.7 },
]

const HOBBY_SPEEDS = [0.2, 0.7, 0.35, 0.9]

const STATEMENT = 'font-display text-[clamp(1.75rem,3.4vw,3.25rem)] uppercase leading-[1.05] tracking-tight'
const BODY = 'font-text text-sm leading-relaxed'
const CAPTION = 'font-text text-xs text-current/50'
const ROW = 'grid grid-cols-12 gap-4 border-t border-current/15 py-5'

const pad = (index) => String(index + 1).padStart(2, '0')

// Fisher–Yates, so every visit gets a fresh arrangement
const shuffle = (list) => {
    const copy = [...list]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
}

const Label = ({ children, className = '' }) => (
    <p className={`flex items-center gap-2 font-text text-xs ${className}`}>
        <span aria-hidden='true' className='size-1.5 rounded-full bg-accent' />
        {children}
    </p>
)

// Renders runs as individual words, accented runs in the highlight colour
const Statement = ({ runs, as: Tag = 'p', className = '' }) => (
    <Tag data-scrub className={`${STATEMENT} ${className}`}>
        {runs.flatMap(([text, accent], run) =>
            text.split(/(\s+)/).map((word, index) =>
                /^\s+$/.test(word) || !word
                    ? word
                    : <span key={`${run}-${index}`} data-word className={accent ? 'text-accent' : undefined}>{word}</span>
            )
        )}
    </Tag>
)

// An image that drifts slower or faster than the page; higher speed reads as closer
const Float = ({ src, alt = '', speed, className = '', imageClassName = '', children }) => (
    <figure data-speed={speed} className={className}>
        <img src={src} alt={alt} loading='lazy' className={`size-full object-cover ${imageClassName}`} />
        {children}
    </figure>
)

// A fixed frame whose image slides inside it as the frame crosses the viewport
const Frame = ({ src, alt = '', className = '' }) => (
    <div className={`overflow-hidden ${className}`}>
        <img data-parallax src={src} alt={alt} loading='lazy' className='size-full scale-115 object-cover' />
    </div>
)

const About = () => {
    const scope = useRef(null)
    const [picks] = useState(() => {
        const shuffled = shuffle(albums)
        const half = Math.ceil(shuffled.length / 2)
        return {
            hero: shuffle(heroShots).slice(0, HERO_SLOTS.length),
            figures: shuffle(figures),
            albumRows: [shuffled.slice(0, half), shuffled.slice(half)],
        }
    })

    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add(MOTION_OK, () => {
            gsap.timeline({ defaults: { ease: 'expo.out' } })
                .from('[data-hero-letter]', { yPercent: 105, duration: 1.2, stagger: 0.05 })
                .from('[data-hero-photo]', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.3, ease: 'expo.inOut' }, 0.2)
                .from('[data-hero-float]', { autoAlpha: 0, scale: 0.7, duration: 1.2, stagger: 0.1 }, 0.6)
                .from('[data-hero-meta]', { autoAlpha: 0, duration: 0.8 }, 0.8)

            // Each statement's words brighten in reading order as it scrolls through
            gsap.utils.toArray('[data-scrub]').forEach((statement) => {
                gsap.fromTo(statement.querySelectorAll('[data-word]'), { opacity: 0.15 }, {
                    opacity: 1,
                    stagger: 0.1,
                    ease: 'none',
                    scrollTrigger: { trigger: statement, start: 'top 85%', end: 'bottom 50%', scrub: true },
                })
            })

            // Floating images move against the scroll by their own depth
            gsap.utils.toArray('[data-speed]').forEach((element) => {
                const distance = () => Number(element.dataset.speed) * 140
                gsap.fromTo(element, { y: distance }, {
                    y: () => -distance(),
                    ease: 'none',
                    scrollTrigger: { trigger: element.parentElement, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
                })
            })

            // Framed images slide within their frame
            gsap.utils.toArray('[data-parallax]').forEach((image) => {
                gsap.fromTo(image, { yPercent: -8 }, {
                    yPercent: 8,
                    ease: 'none',
                    scrollTrigger: { trigger: image.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
                })
            })

            // Album rows slide in opposite directions
            gsap.utils.toArray('[data-drift]').forEach((row) => {
                const travel = () => -(row.scrollWidth - window.innerWidth)
                const leftward = row.dataset.drift === 'left'
                gsap.fromTo(row, { x: () => (leftward ? 0 : travel()) }, {
                    x: () => (leftward ? travel() : 0),
                    ease: 'none',
                    scrollTrigger: { trigger: row.parentElement, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
                })
            })

            revealOnScroll(scope.current)
        })
    }, { scope })

    return (
        <>
            <main ref={scope} className='relative z-10 w-full overflow-x-clip bg-light text-dark'>
                {/* Hero */}
                <section className='relative flex h-svh flex-col items-center justify-center px-5'>
                    {picks.hero.map(({ src, alt }, index) => (
                        <div key={src} data-hero-float aria-hidden='true' className={`absolute hidden md:block ${HERO_SLOTS[index].className}`}>
                            <Float src={src} alt={alt} speed={HERO_SLOTS[index].speed} className='size-full' imageClassName='object-top' />
                        </div>
                    ))}
                    <h1 aria-label='About' className='relative flex overflow-hidden font-display text-[23vw] uppercase leading-[0.8] tracking-[-0.04em]'>
                        {'About'.split('').map((letter, index) => (
                            <span key={index} data-hero-letter aria-hidden='true' className='block'>{letter}</span>
                        ))}
                    </h1>
                    <img
                        data-hero-photo
                        src={portrait}
                        alt='Portrait of Imam Affandi'
                        className='relative mt-[-6vw] aspect-4/5 w-[min(22rem,60vw)] object-cover'
                    />
                    <div data-hero-meta className='absolute inset-x-5 bottom-5 grid grid-cols-2 gap-2 font-text text-xs md:grid-cols-3'>
                        <span>Creative Developer</span>
                        <span className='hidden text-center md:block'>Life is an experiment, not a fixed destination.</span>
                        <span className='text-right'>Indonesia ©{new Date().getFullYear()}</span>
                    </div>
                </section>

                {/* Who */}
                <section className='grid grid-cols-1 gap-8 px-5 py-32 md:grid-cols-12 md:px-10 md:py-48'>
                    <Statement runs={statements.intro} as='h2' className='md:col-span-8' />
                    <Label className='md:col-span-3 md:col-start-10 md:justify-self-end'>Imam Affandi</Label>
                    <Frame src={view} className='mt-16 aspect-4/3 w-full md:col-span-4 md:col-start-5' />
                </section>

                {/* About */}
                <section className='grid grid-cols-1 gap-8 px-5 pb-32 md:grid-cols-12 md:px-10 md:pb-48'>
                    <Label className='md:col-span-3'>About</Label>
                    <p data-reveal className={`${BODY} md:col-span-3 md:col-start-7`}>
                        I enjoy exploring ideas, building things, and understanding how they work. From interactive digital experiences to unconventional experiments, I'm drawn to the process of turning curiosity into something tangible.
                    </p>
                    <p data-reveal className={`${BODY} md:col-span-3 md:col-start-10`}>
                        But my interests extend beyond the screen. Philosophy, psychology, human behavior, music, films, and games are some of the things that constantly shape my perspective.
                    </p>
                </section>

                {/* Work along the way: staggered project shots at different depths */}
                <section className='grid grid-cols-1 gap-12 px-5 pb-32 md:grid-cols-12 md:gap-8 md:px-10 md:pb-56'>
                    <Label className='md:col-span-12'>Along the way</Label>
                    {work.map(({ src, name }, index) => (
                        <Float key={name} src={src} alt={`${name} website`} speed={WORK_SLOTS[index].speed} className={`flex flex-col gap-3 ${WORK_SLOTS[index].className}`} imageClassName='min-h-0 flex-1 object-top'>
                            <figcaption className={CAPTION}>{name}</figcaption>
                        </Float>
                    ))}
                </section>

                {/* Profile + what I do */}
                <section className='grid grid-cols-1 gap-16 px-5 pb-32 md:grid-cols-12 md:gap-8 md:px-10 md:pb-48'>
                    <div className='md:col-span-6'>
                        <Label className='mb-8'>Profile</Label>
                        <dl className='font-text text-sm'>
                            {profile.map(({ term, detail }) => (
                                <div key={term} data-reveal className={ROW}>
                                    <dt className='col-span-4 text-dark/50 md:col-span-3'>{term}</dt>
                                    <dd className='col-span-8 md:col-span-9'>{detail}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className='md:col-span-5 md:col-start-8'>
                        <Label className='mb-8'>What I do</Label>
                        <ol>
                            {services.map((service, index) => (
                                <li key={service} data-reveal className={`${ROW} items-baseline`}>
                                    <span className='col-span-2 font-text text-xs text-dark/50'>{pad(index)}</span>
                                    <span className='col-span-10 font-display text-2xl uppercase leading-none tracking-tight md:text-3xl'>{service}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Journey: the title stays pinned beside the chapters on wide screens */}
                <section className='grid grid-cols-1 gap-12 px-5 pb-32 md:grid-cols-12 md:gap-8 md:px-10 md:pb-48'>
                    <div className='flex flex-col gap-8 md:sticky md:top-24 md:col-span-5 md:self-start'>
                        <Label>Journey</Label>
                        <Statement runs={statements.journey} as='h2' />
                    </div>
                    <ol className='md:col-span-6 md:col-start-7'>
                        {journey.map(({ title, paragraphs, image }, index) => (
                            <li key={title} data-reveal className={ROW}>
                                <p className='col-span-12 font-text text-xs text-dark/50 md:col-span-4'>
                                    {pad(index)} — {title}
                                </p>
                                <div className='col-span-12 flex flex-col gap-4 md:col-span-8'>
                                    {paragraphs.map((paragraph) => (
                                        <p key={paragraph} className={BODY}>{paragraph}</p>
                                    ))}
                                    {image && (
                                        <figure className='mt-4 flex flex-col gap-3'>
                                            <Frame src={image.src} alt={image.caption} className='aspect-16/10 w-full' />
                                            <figcaption className={CAPTION}>{image.caption}</figcaption>
                                        </figure>
                                    )}
                                </div>
                            </li>
                        ))}
                        <li data-reveal className='border-t border-current/15 pt-10'>
                            <p className='font-display text-2xl uppercase leading-[1.05] tracking-tight md:text-3xl'>
                                Still becoming. Still curious. <span className='text-accent'>Still figuring things out.</span>
                            </p>
                        </li>
                    </ol>
                </section>

                {/* Perspective */}
                <section className='grid grid-cols-1 gap-8 px-5 md:grid-cols-12 md:px-10'>
                    <Label className='md:col-span-12'>Perspective</Label>
                    <Statement runs={statements.boxes} as='h2' className='md:col-span-6' />
                    <p data-reveal className={`${BODY} md:col-span-3 md:col-start-10 md:self-end`}>
                        I've never been fond of putting people into boxes. A handful of labels, expectations, or someone else's perception can't define a person. We're all works in progress, constantly changing through the things we experience.
                    </p>
                </section>

                {/* Experiment: the statement sits among the thinkers who shaped it */}
                <section className='relative flex flex-col items-center gap-10 px-5 py-32 md:min-h-[120vh] md:justify-center md:px-10 md:py-56'>
                    {picks.figures.map(({ src, name }, index) => (
                        <Float
                            key={name}
                            src={src}
                            alt={`Portrait of ${name}`}
                            speed={FIGURE_SLOTS[index].speed}
                            className={`absolute hidden flex-col gap-2 md:flex ${FIGURE_SLOTS[index].className}`}
                            imageClassName='aspect-3/4 grayscale'>
                            <figcaption className={CAPTION}>{name}</figcaption>
                        </Float>
                    ))}
                    <p data-reveal className={`${BODY} relative text-dark/60`}>Perhaps that's how I see life, too.</p>
                    <Statement runs={statements.experiment} as='h2' className='relative mx-auto max-w-4xl text-center' />
                    {/* Small screens get the portraits as a strip instead */}
                    <div className='grid w-full grid-cols-4 gap-2 md:hidden'>
                        {picks.figures.map(({ src, name }) => (
                            <img key={name} data-reveal src={src} alt={`Portrait of ${name}`} loading='lazy' className='aspect-3/4 w-full object-cover grayscale' />
                        ))}
                    </div>
                </section>

                {/* Off screen */}
                {/* <section className='grid grid-cols-2 gap-4 px-5 pb-32 md:grid-cols-12 md:gap-8 md:px-10 md:pb-56'>
                    <Label className='col-span-2 md:col-span-12'>Off screen</Label>
                    {hobbies.map(({ src, label }, index) => (
                        <Float
                            key={label}
                            src={src}
                            alt={label}
                            speed={HOBBY_SPEEDS[index]}
                            className={`flex flex-col gap-3 md:col-span-3 ${index % 2 ? 'md:mt-[18vh]' : ''}`}
                            imageClassName='aspect-3/4'>
                            <figcaption className='font-display text-xl uppercase leading-none md:text-2xl'>{label}</figcaption>
                        </Float>
                    ))}
                </section> */}

                {/* On repeat: album covers drifting in opposite directions */}
                <section aria-label='On repeat' className='flex flex-col gap-4 overflow-hidden pb-32 md:pb-48'>
                    <Label className='mb-4 px-5 md:px-10'>On repeat</Label>
                    {picks.albumRows.map((row, index) => (
                        <ul key={index} data-drift={index ? 'right' : 'left'} className='flex w-max gap-4 px-5 md:px-10'>
                            {row.map(({ src, alt }) => (
                                <li key={alt} className='w-[42vw] md:w-[22vw]'>
                                    <img src={src} alt={alt} loading='lazy' className='aspect-square w-full object-cover' />
                                </li>
                            ))}
                        </ul>
                    ))}
                </section>

                {/* Memory: dark full-bleed, so the nav switches to cream over it */}
                <section data-memory data-nav-light className='relative flex min-h-svh items-center overflow-hidden bg-dark px-5 py-32 text-light md:px-10'>
                    <img data-parallax src={workBackdrop} alt='' loading='lazy' className='absolute inset-0 size-full scale-115 object-cover opacity-45 grayscale' />
                    <Label className='absolute top-24 left-5 md:left-10'>Memory</Label>
                    <div className='relative ml-auto flex flex-col gap-8 md:w-1/2'>
                        <p data-reveal className={`${BODY} max-w-md text-light/70`}>
                            We spend so much time thinking about the future, chasing permanence, and worrying about how we'll be remembered.
                        </p>
                        <Statement runs={statements.memory} as='h2' />
                        <p data-reveal className={`${BODY} max-w-md text-light/70`}>
                            Maybe that's not something to be afraid of. Maybe it's a reason to appreciate being here in the first place.
                        </p>
                    </div>
                </section>

                {/* Today */}
                <section className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex flex-col justify-between gap-12 px-5 py-24 md:px-10'>
                        <div className='flex flex-col gap-8'>
                            <Label>Today</Label>
                            <Statement runs={statements.today} as='h2' />
                            <p data-reveal className={`${BODY} max-w-md`}>
                                So, while I'm here, I'd rather keep learning, keep creating, stay curious, and experience as much of this strange little existence as I can.
                            </p>
                            <p data-reveal className={`${BODY} max-w-md text-dark/60`}>
                                Still figuring things out. And probably always will.
                            </p>
                        </div>
                    </div>
                    <Frame src={portraitRed} alt='Imam Affandi' className='aspect-4/5 size-full md:aspect-auto md:min-h-[80vh]' />
                </section>

                <p className='px-5 py-10 font-text text-[0.65rem] text-dark/50 md:px-10'>
                    No more self-destructive thoughts. We should realize that we often suffer more in our imagination than in reality. And despite the hardship in life, love abounds. And it can always get better.
                </p>
            </main>
            <Footer />
        </>
    )
}

export default About