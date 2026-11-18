import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Pages whose own background is dark, so the nav stays cream on them
const DARK_PAGES = ['/']
// Roughly the vertical middle of the nav (top-5 + half its height)
const NAV_MIDDLE = 34

const Nav = () => {
    const { pathname } = useLocation()
    const [overDark, setOverDark] = useState(false)

    // On light pages, turn cream while a dark area marked [data-nav-light] sits behind the nav
    // (dark sections, and the footer's curtain spacer)
    useEffect(() => {
        const zones = [...document.querySelectorAll('[data-nav-light]')]
        let frame = 0
        const update = () => {
            frame = 0
            setOverDark(zones.some((zone) => {
                const { top, bottom } = zone.getBoundingClientRect()
                return top <= NAV_MIDDLE && bottom >= NAV_MIDDLE
            }))
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [pathname])

    const light = DARK_PAGES.includes(pathname) || overDark

    return (
        <header className={`fixed inset-x-5 top-5 z-50 flex items-center justify-between transition-colors duration-300 ${light ? 'text-light' : 'text-dark'}`}>
            <Link to={'/'} className='font-display text-xl tracking-widest'>imamaffandi</Link>
            <Link to={'/profile'} className='font-text text-xs underline hover:opacity-75'>profile</Link>
        </header>
    )
}

export default Nav
