import { useEffect } from 'react'

import { Modal, FieldText, Button } from 'components'

import { useForm, useLoader } from 'hooks'

import { ProjectService } from 'services'

export default function ProjectForm({
    onSubmit = _ => {},
    onCancel = _ => {},
    data = {},
}) {
    const [formData, setFormData] = useForm()
    const [loader] = useLoader()

    /**
     * Create or update a project
     */
    const _onSubmit = async e => {
        e.preventDefault()
        loader.show()
        let project = {}

        // if exist id key, update project
        if (formData.value.id) {
            project = await ProjectService.updateProject(formData.value)
        } else {
            // create new project
            project = await ProjectService.createProject(formData.value)
        }

        // if server response if success, emit submit event
        if (Object.keys(project).length > 0) {
            onSubmit(project)
        }
        loader.hide()
    }

    useEffect(_ => {
        if (Object.keys(data).length > 0) {
            setFormData(data)
        }
    }, [])

    return (
        <Modal>
            <form
                name={formData.name}
                onChange={formData.onChange}
                onSubmit={_onSubmit}
                className='ProjectForm'
            >
                <h1 className='Title'>Información Proyecto</h1>

                <div>
                    <FieldText name='name' label='Nombre proyecto' required />

                    <FieldText
                        name='description'
                        label='Descripción proyecto'
                        required
                    />
                </div>

                <div className='buttons'>
                    <Button>Guardar</Button>
                    <Button onClick={onCancel} type='secondary'>
                        Cancelar
                    </Button>
                </div>
            </form>
        </Modal>
    )
}
