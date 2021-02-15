import { useState, useEffect } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

import { Button } from 'components'

export default function ProjectBoard({ data = {} }) {
    const [project, setProject] = useState({})

    useEffect(
        _ => {
            if (Object.keys(data).length > 0) {
                setProject(data)
            }
        },
        [JSON.stringify(data)]
    )
    return (
        <div className='ProjectBoard'>
            <header>
                <div className='detail'>
                    <h3 className='Title'>{project.name}</h3>
                    <p>{project.description}</p>
                    <span>{project.createdAt}</span>
                </div>

                <div className='actions'>
                    <Button type='text'>
                        <MdEdit size={20} className='Icon' />
                        editar proyecto
                    </Button>

                    <Button>
                        <IoIosAddCircle size={22} className='Icon' />
                        nueva tarea
                    </Button>
                </div>
            </header>
            <div className='state'>a</div>
            <div className='state'>b</div>
            <div className='state'>c</div>
        </div>
    )
}
