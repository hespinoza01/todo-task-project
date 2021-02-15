import { Link } from 'react-router-dom'
import { FieldText, FieldPassword, Button } from 'components'

// import hooks
import { useForm, useLoader } from 'hooks'

// import services
import { UserService } from 'services'

export default function Login() {
    const [data, resetData] = useForm()
    const [loader] = useLoader()

    const onLogin = async e => {
        e.preventDefault()
        loader.show()
        const { email, password } = data.value

        const response = await UserService.login(email, password)

        console.log(response)
        loader.hide()
    }
    return (
        <section className='Login'>
            <form
                onChange={data.onChange}
                onSubmit={onLogin}
                className='Login-form'
            >
                <h1 className='Title'>Iniciar Sesión</h1>

                <div>
                    <FieldText name='email' label='Correo electrónico' />
                    <FieldPassword name='password' label='Contraseña' />
                </div>

                <Button text='Iniciar sesión' />

                <p className='create-account'>
                    ¿Aún no tienes una cuenta?{' '}
                    <Link to='/registro' className='Link'>
                        regístrate
                    </Link>
                </p>
            </form>
        </section>
    )
}
