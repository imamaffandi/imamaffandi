import React, { useState } from 'react'
import { Link } from 'react-router'
import { links } from '../constant'
const Nav = ({ className, childClass }) => {
    const [hover, setHover] = useState(null);
    return (
        <main>
            <Link to={'/'} className='font-text font-semibold absolute top-5 left-5 tracking-wider'>Imam Affandi</Link>
            <div className={`absolute bottom-0 left-0 p-5 text-xs font-text tracking-tight flex flex-col items-start justify-start`}>
                {
                    links.map((i, index) => {
                        return (
                            <Link
                                key={index}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(null)}
                                className={` transition duration-200 
                                ${hover !== null && hover !== index ? ' opacity-50' : ''} ${childClass}`}
                                to={i.link}>{i.title}</Link>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Nav