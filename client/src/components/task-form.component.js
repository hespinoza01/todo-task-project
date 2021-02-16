import { useEffect } from 'react'

import { Modal, Button, FieldText } from 'components'

import { useForm, useLoader } from 'hooks'

import { TaskService } from 'services'

import { ommitObjectKey } from 'utils'

export default function TaskForm({
    onSubmit = _ => {},
    onCancel = _ => {},
    data = {},
    projectId = -1,
}) {
    const [formData, setFormData] = useForm()
    const [loader] = useLoader()

    /**
     * Create or update a task
     */
    const _onSubmit = async e => {
        e.preventDefault()
        loader.show()
        let task = {}

        if (formData.value.id) {
            task = await TaskService.updateTask(projectId, formData.value)
        } else {
            task = await TaskService.createTask(projectId, formData.value)
        }

        // if server response if success, emit submit event
        if (Object.keys(task).length > 0) {
            onSubmit(task)
        }

        loader.hide()
    }

    useEffect(
        _ => {
            if (Object.keys(data).length > 0) {
                setFormData(data)
            }
        },
        [JSON.stringify(data)]
    )

    return (
        <Modal>
            <form
                name={formData.name}
                onChange={formData.onChange}
                onSubmit={_onSubmit}
                className='TaskForm'
            >
                <h1 className='Title'>Información Tarea</h1>

                <div>
                    <FieldText name='title' label='Título tarea' required />

                    <FieldText
                        name='description'
                        label='Descripción tarea'
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
