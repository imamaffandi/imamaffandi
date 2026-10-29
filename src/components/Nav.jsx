import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links } from '../constant'

// Contact renders its own link columns, so the corner menu steps aside there
const PAGES_WITH_OWN_LINKS = ['/contact']

const Nav = () => {
    const [hover, setHover] = useState(null);
    const { pathname } = useLocation()
    const showLinks = !PAGES_WITH_OWN_LINKS.includes(pathname)
    return (
        <header>
            <Link to={'/'} className='fixed z-50 top-5 left-5 font-display text-xl font-semibold tracking-wide text-light mix-blend-difference'>Imam Affandi</Link>
            {showLinks && (
                <nav aria-label='Main' className='fixed z-50 bottom-0 left-0 p-5 text-xs bg-white font-text text-dark flex flex-col items-start justify-start'>
                    {links.map((i, index) => {
                        return (
                            <Link
                                key={index}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(null)}
                                aria-current={pathname === i.link ? 'page' : undefined}
                                className={`transition-opacity duration-200 ${hover !== null && hover !== index ? 'opacity-50' : ''}`}
                                to={i.link}>{i.title}</Link>
                        )
                    })}
                </nav>
            )}
        </header>
    )
}

export default Nav
