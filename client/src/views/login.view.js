import { Link, useHistory, Redirect } from 'react-router-dom'
import { FieldText, FieldPassword, Button } from 'components'

// import hooks
import { useForm, useLoader } from 'hooks'

// import services
import { UserService, setAuth, isAuth } from 'services'

export default function Login() {
    const history = useHistory()
    const [data] = useForm()
    const [loader] = useLoader()

    /**
     * make petition server to check user credentials
     */
    const onLogin = async e => {
        e.preventDefault()
        loader.show()

        // capture server response
        const response = await UserService.login(data.value)

        loader.hide()

        // if user credencials is correct, capture access token and redirect to home
        if (response.token) {
            setAuth(response.token)
            history.push('/')
        }
    }

    // if already loged, redirect to home
    if (isAuth()) {
        return <Redirect to='/' />
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
                    <FieldText
                        name='email'
                        type='email'
                        label='Correo electrónico'
                        required
                    />

                    <FieldPassword
                        name='password'
                        label='Contraseña'
                        required
                    />
                </div>

                <Button text='Iniciar sesión' />

                <p className='create-account'>
                    ¿Aún no tienes una cuenta?
                    <Link to='/registro' className='Link'>
                        regístrate
                    </Link>
                </p>
            </form>
        </section>
    )
}
