import React from 'react'
import { Link } from 'react-router-dom'
import { links, social } from '../constant'

const Footer = () => {
    const half = Math.ceil(links.length / 2)
    const profiles = social.slice(0, 3)
    return (
        <footer className='relative bg-dark text-light'>
            {/* Closing call to action */}
            <div className='flex flex-col items-start gap-10 px-5 pt-24 pb-20 md:px-10 md:pt-32 md:pb-28'>
                <h2 className='font-display text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl'>
                    You bring the brief.
                    <span className='block text-light/55'>I'll bring it to life.</span>
                </h2>
                <Link
                    to='/contact'
                    className='rounded-full bg-light px-6 py-3 font-text text-sm text-dark transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]'>
                    Get in touch
                </Link>
            </div>
            {/* Page links with the wordmark centered */}
            <nav aria-label='Footer' className='grid grid-cols-2 gap-y-6 border-t border-light/15 px-5 py-8 font-text text-xs md:grid-cols-[1fr_auto_1fr] md:items-center md:px-10'>
                <Link to='/' className='order-first col-span-2 font-display text-3xl md:order-0 md:col-start-2 md:col-span-1 md:row-start-1 md:text-4xl'>Imam Affandi</Link>
                <div className='flex gap-6 md:col-start-1 md:row-start-1'>
                    {links.slice(0, half).map((i) => (
                        <Link key={i.link} to={i.link} className='transition-opacity duration-200 hover:opacity-60'>{i.title}</Link>
                    ))}
                </div>
                <div className='flex justify-end gap-6 md:col-start-3 md:row-start-1'>
                    {links.slice(half).map((i) => (
                        <Link key={i.link} to={i.link} className='transition-opacity duration-200 hover:opacity-60'>{i.title}</Link>
                    ))}
                </div>
            </nav>
            <div className='flex flex-col gap-4 border-t border-light/15 px-5 py-6 font-text text-xs text-light/70 md:flex-row md:items-center md:justify-between md:px-10'>
                <ul className='flex flex-wrap gap-6'>
                    {profiles.map((i) => (
                        <li key={i.link}>
                            <a href={i.link} target='_blank' rel='noopener noreferrer' className='transition-colors duration-200 hover:text-light'>{i.title}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center gap-4'>
                    <Link to='/terms' className='rounded-full border border-light/30 px-4 py-1.5 transition-colors duration-200 hover:bg-light hover:text-dark'>Terms of Service</Link>
                    <p>© {new Date().getFullYear()} Imam Affandi</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
