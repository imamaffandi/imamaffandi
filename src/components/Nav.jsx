import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header className='fixed inset-x-5 top-5 z-50 flex items-start justify-between text-light'>
            <Link to={'/'} className='font-display text-xl font-semibold tracking-wide'>Imam Affandi</Link>
            <Link to={'/about'} className='font-text text-xs underline hover:opacity-75'>About</Link>
        </header>
    )
}

export default Nav
