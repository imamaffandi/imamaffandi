import React from 'react'
import { Link } from 'react-router-dom'
import { data, getHostname } from '../data/projects'

// Alternating wide/narrow columns with a stepped offset so the grid doesn't read as a table
const LAYOUT = [
    'md:col-span-7',
    'md:col-span-5 md:mt-24',
    'md:col-span-5',
    'md:col-span-7 md:mt-24',
]

const WorkGrid = () => {
    return (
        <ul className='grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12'>
            {data.map((project, index) => (
                <li key={project.id} data-reveal className={LAYOUT[index % LAYOUT.length]}>
                    <Link to={`/projects/${project.path}`} className='group flex flex-col gap-4'>
                        <div className='aspect-[16/10] overflow-hidden bg-dark/10'>
                            <img
                                src={project.image}
                                alt={`${project.title} website preview`}
                                loading='lazy'
                                className='h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]'
                            />
                        </div>
                        <div className='flex items-baseline justify-between gap-6'>
                            <h3 className='font-display text-2xl md:text-3xl'>{project.title}</h3>
                            <span className='font-text text-xs text-dark/60'>{getHostname(project)}</span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default WorkGrid
