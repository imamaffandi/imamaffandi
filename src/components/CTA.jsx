import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { social } from '../constant'

const CTA = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="fixed top-2.5 right-2.5 z-50 flex items-start gap-2">

            <nav
                aria-label={'Main menu'}
                className={`relative overflow-hidden rounded-xl p-2.5 text-light font-text flex flex-col items-start justify-start ${openModal ? 'h-40 w-70 bg-dark ' : 'h-11 w-11 bg-transparent'}`}
            >
                <button
                    type='button'
                    aria-label={openModal ? 'open' : "close"}
                    onClick={() => setOpenModal(!openModal)}
                    className='absolute top-1 right-1 cursor-pointer'
                >  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${openModal ? 'text-light' : 'text-dark'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={openModal ? "M6 18L18 6M6 6l12 12" : "M3.75 9h16.5m-16.5 6.75h16.5"} />
                    </svg>
                </button>
                {openModal && (
                    <>
                        <div className="flex flex-wrap justify-between items-start gap-2.5 w-full h-full pt-5">
                            {social.map((i, index) => {
                                return (
                                    <a key={index} className='cursor-pointer text-xs font-thin hover:opacity-80' href={i.link} target='_blank' rel='noopener noreferrer'>{i.title}</a>
                                )
                            })}
                            <Link className='text-xs font-thin hover:opacity-80' to="/term">{ }</Link>
                        </div>
                    </>
                )}
            </nav>
        </div>
    )
}

export default CTA