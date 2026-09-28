import React from 'react'

const Footer = () => {
    return (
        <main className='absolute bottom-0 left-0 w-full h-[90dvh] bg-white rounded-t-2xl border'>
            {/* Namecard */}
            <section className='absolute top-3 left-3 flex flex-col items-start justify-start gap-2'>
                <div className='flex items-end justify-start leading-3 gap-2'>
                    <img src='/icon.ico' className='w-7 h-7 object-contain' />
                    <p className='text-md font-text font-semibold tracking-wider'>Imam Affandi</p>
                </div>
                <p className='w-56 text-xs font-text '>I created beautiful, functional, excellent, smooth, extraordinary, and working webapp for you</p>
            </section>
        </main>
    )
}

export default Footer