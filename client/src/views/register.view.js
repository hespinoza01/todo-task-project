import { Link, Redirect, withRouter } from 'react-router-dom'
import { Button, FieldText, FieldPassword } from 'components'

// import hooks
import { useForm, useLoader } from 'hooks'

// import service
import { UserService, isAuth } from 'services'

function Register({ history }) {
    const [data] = useForm()
    const [loader] = useLoader()

    /**
     * Submit user register
     */
    const onRegister = async e => {
        e.preventDefault()

        loader.show()

        // capture register response
        const response = await UserService.register(data.value)

        loader.hide()

        // if register was successfull, redirect to login
        if (response) {
            history.push('/acceso')
        }
    }

    // if already loged, redirect to home
    if (isAuth()) {
        return <Redirect to='/' />
    }

    return (
        <section className='Register'>
            <form
                onChange={data.onChange}
                onSubmit={onRegister}
                className='Register-Form'
            >
                <h1 className='Title'>Crear Cuenta</h1>

                <div>
                    <FieldText
                        name='email'
                        type='email'
                        label='Correo electrónico'
                        required
                    />

                    <FieldText
                        name='fullname'
                        label='Nombre completo'
                        required
                    />

                    <FieldPassword
                        name='password'
                        label='Contraseña'
                        required
                    />

                    <FieldPassword
                        name='confirmPassword'
                        label='Confirmar contraseña'
                        required
                    />
                </div>

                <Button>crear cuenta</Button>

                <p className='i-have-account'>
                    ¿Ya tienes una cuenta?
                    <Link to='/acceso' className='Link'>
                        iniciar sesión
                    </Link>
                </p>
            </form>
        </section>
    )
}

export default withRouter(Register)
