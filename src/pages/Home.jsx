import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Noise } from '../components'
import { data } from '../data/projects'
import { gsap, useGSAP, MOTION_OK } from '../lib/motion'
import { skybg } from '../assets'

// New projects are appended to data, so the last entry is the one shown first
const LATEST = data[data.length - 1]

// The images fill the viewport and the frame is a clip-path window over them,
// so expanding into a project is just opening the clip (no stretched pixels)
const getFrameInset = ({ collapsed = false } = {}) => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const width = vw >= 768 ? vw * 0.5 : vw - 32
    const height = collapsed ? 0 : (width * 9) / 16
    const x = (vw - width) / 2
    const y = (vh - height) / 2
    return `inset(${y}px ${x}px ${y}px ${x}px)`
}

const Home = () => {
    const scope = useRef(null)
    const frame = useRef(null)
    const isLeaving = useRef(false)
    const [active, setActive] = useState(null)
    const navigate = useNavigate()
    const shownId = active ?? LATEST.id
    const shownProject = data.find((i) => i.id === shownId)

    useGSAP(() => {
        const fitFrame = () => {
            if (!isLeaving.current) gsap.set(frame.current, { clipPath: getFrameInset() })
        }
        fitFrame()
        window.addEventListener('resize', fitFrame)

        const mm = gsap.matchMedia()
        mm.add(MOTION_OK, () => {
            gsap.timeline({ defaults: { ease: 'expo.out' } })
                .fromTo(frame.current,
                    { clipPath: getFrameInset({ collapsed: true }) },
                    { clipPath: getFrameInset(), duration: 1.4 })
                .from('[data-title]', { yPercent: 110, duration: 1, stagger: 0.06 }, 0.35)
        })

        return () => window.removeEventListener('resize', fitFrame)
    }, { scope })

    // Crossfade to whichever project is being previewed, settling from a slight zoom
    useGSAP(() => {
        gsap.utils.toArray('[data-image]', scope.current).forEach((image) => {
            const isShown = image.dataset.image === shownId
            gsap.to(image, {
                autoAlpha: isShown ? 1 : 0,
                scale: isShown ? 1 : 1.06,
                duration: 0.8,
                ease: 'power3.out',
                overwrite: 'auto',
            })
        })
    }, { scope, dependencies: [shownId] })

    const preview = (id) => {
        if (!isLeaving.current) setActive(id)
    }

    // Plain handler: the timeline completes before navigation unmounts this page
    const openProject = (event, project) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey) return
        event.preventDefault()
        if (isLeaving.current) return
        setActive(project.id)
        isLeaving.current = true

        const go = () => navigate(`/projects/${project.path}`, { state: { expanded: true } })
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return go()

        gsap.timeline({ onComplete: go })
            .to(scope.current.querySelectorAll('[data-title]'), { yPercent: -110, duration: 0.45, stagger: 0.03, ease: 'power2.in' }, 0)
            .to(frame.current, { clipPath: 'inset(0px 0px 0px 0px)', duration: 1.1, ease: 'expo.inOut' }, 0.15)
            // The detail page has no grain, so fade it out instead of letting it pop off on unmount
            .to(scope.current.querySelector('[data-noise]'), { autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, 0.5)
    }

    return (
        <main
            style={{ backgroundImage: `url(${skybg})`, backgroundPosition: 'bottom' }}
            ref={scope} className='relative h-dvh w-full overflow-hidden bg-light'>
            {/* clip-path also clips hit-testing, so only the visible window is clickable */}
            <Link
                ref={frame}
                to={`/projects/${shownProject.path}`}
                onClick={(event) => openProject(event, shownProject)}
                aria-label={`Open ${shownProject.title}`}
                className='absolute inset-0 block cursor-pointer overflow-hidden bg-light/10'>
                {data.map((i) => (
                    <img
                        key={i.id}
                        data-image={i.id}
                        src={i.image}
                        alt=''
                        className={`absolute inset-0 h-full w-full object-cover ${i.id === LATEST.id ? '' : 'invisible opacity-0'}`}
                    />
                ))}
            </Link>
            <div data-noise className='pointer-events-none absolute inset-0'>
                <Noise />
            </div>
            <ul
                aria-label='Projects'
                onMouseLeave={() => preview(null)}
                className='absolute right-5 bottom-5 flex flex-col items-end font-text text-xs tracking-wide text-light'>
                {data.map((i) => (
                    <li key={i.id} className='overflow-hidden'>
                        <span data-title className='block'>
                            <Link
                                to={`/projects/${i.path}`}
                                onClick={(event) => openProject(event, i)}
                                onMouseEnter={() => preview(i.id)}
                                onFocus={() => preview(i.id)}
                                onBlur={() => preview(null)}
                                className={`block leading-relaxed transition-[opacity,translate] duration-300 hover:-translate-x-0.5 ${active && active !== i.id ? 'opacity-40' : ''}`}>
                                {i.title}
                            </Link>
                        </span>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Home
