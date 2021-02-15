import { Link } from 'react-router-dom'
import { Button, FieldText, FieldPassword } from 'components'

// import hooks
import { useForm, useLoader } from 'hooks'

// import service
import { UserService } from 'services'

export default function Register() {
    const [data, resetData] = useForm()
    const [loader] = useLoader()

    const onRegister = async e => {
        e.preventDefault()

        loader.show()
        const response = await UserService.register(data.value)
        console.log(response)
        loader.hide()
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
                    <FieldText name='email' label='Correo electrónico' />

                    <FieldText name='fullname' label='Nombre completo' />

                    <FieldPassword name='password' label='Contraseña' />

                    <FieldPassword
                        name='confirmPassword'
                        label='Confirmar contraseña'
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
