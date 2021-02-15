import { useHistory } from 'react-router-dom'

import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

// import assets
import { Logo } from 'assets'

// import components
import { GreetingMessage } from 'components'

// import hooks
import { useAppContext } from 'hooks'

// import service and store
import { removeAuth } from 'services'
import { actions } from 'store'

export default function Navbar() {
    const [state, dispatch] = useAppContext()
    const history = useHistory()
    const [showMore, setShowMore] = useState(false)

    /**
     * close current session and redirect to login
     */
    const onLogout = _ => {
        dispatch(actions.DELETE_USER)
        removeAuth()
        history.push('/acceso')
    }

    return (
        <header className='Navbar'>
            <div className='banner'>
                <div className='logo-container'>
                    <img src={Logo} alt='logo' className='logo' />
                </div>
                <p>TODO Task Project</p>
            </div>

            <GreetingMessage />

            <div className='user-info'>
                <span>{state.user.fullname || 'sin nombre'}</span>
                <FaUser size={38} className='picture' />
                <IoIosArrowDown
                    size={18}
                    className={`show-more ${showMore ? 'active' : ''}`}
                    onClick={_ => setShowMore(!showMore)}
                />
            </div>

            <ul className={`options-container ${showMore ? 'active' : ''}`}>
                <li onClick={onLogout}>Cerrar sessión</li>
            </ul>
        </header>
    )
}
