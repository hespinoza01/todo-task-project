import { FaSun, FaCloudSun, FaMoon } from 'react-icons/fa'

export default function GreetingMessage() {
    // get system hour
    const dayHour = new Date().getHours()

    return (
        <div className='GreetingMessage'>
            {dayHour >= 18 && (
                <>
                    <p>¡Buenas noches!</p>
                    <FaMoon size={24} />
                </>
            )}

            {dayHour < 18 && dayHour > 12 && (
                <>
                    <p>¡Buenas tardes!</p>
                    <FaCloudSun size={24} />
                </>
            )}

            {dayHour <= 12 && (
                <>
                    <p>¡Buenos días!</p>
                    <FaSun size={24} />
                </>
            )}
        </div>
    )
}
