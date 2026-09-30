import React, { useState } from 'react'
import { Link } from 'react-router'
import { links } from '../constant'
const Nav = () => {
    const [hover, setHover] = useState(null);
    return (
        <main>
            <Link to={'/'} className='font-display font-black fixed z-50 top-5 left-5 tracking-wider text-dark'>Imam Affandi</Link>
            <div className={`fixed z-50 bottom-0 left-0 p-5 text-xs font-text tracking-tight flex flex-col items-start justify-start`}>
                {
                    links.map((i, index) => {
                        return (
                            <Link
                                key={index}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(null)}
                                className={` transition duration-200 
                                ${hover !== null && hover !== index ? ' opacity-50' : ''}`}
                                to={i.link}>{i.title}</Link>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Nav