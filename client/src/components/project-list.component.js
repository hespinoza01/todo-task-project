import { useState, useEffect } from 'react'
import { IoIosAddCircle } from 'react-icons/io'

// import components
import { ProjectItem, Button, ProjectForm } from 'components'

// import services
import { ProjectService } from 'services'

// import utils
import { randomKey } from 'utils'

// import hooks and store
import { useAppContext } from 'hooks'
import { actions } from 'store'

export default function ProjectList({ onDetail = _ => {} }) {
    const [state, dispatch] = useAppContext()
    const [addProject, setAddProject] = useState(false)
    const [activeProject, setActiveProject] = useState(-1)

    /**
     * Init project settings
     */
    const configureComponent = async _ => {
        const data = await ProjectService.getProjectList()
        dispatch(actions.SET_PROJECTS, data)
    }

    /**
     * Receive data from created project and append to project list
     * @param {Object} response
     */
    const onCreateProject = response => {
        dispatch(actions.SET_PROJECTS, [...state.projects, response])
        setAddProject(false)
    }

    useEffect(_ => {
        configureComponent()
    }, [])

    return (
        <div className='ProjectList'>
            <Button onClick={_ => setAddProject(true)}>
                <IoIosAddCircle size={22} className='Icon' />
                nuevo proyecto
            </Button>

            {state.projects.length === 0 && (
                <p className='empty'>Sin proyectos para mostrar</p>
            )}

            {state.projects.map(item => (
                <ProjectItem
                    className={`${activeProject === item.id ? 'active' : ''}`}
                    onClick={_ => {
                        onDetail(item)
                        setActiveProject(item.id)
                    }}
                    key={randomKey()}
                    data={item}
                />
            ))}

            {addProject && (
                <ProjectForm
                    onSubmit={onCreateProject}
                    onCancel={_ => setAddProject(false)}
                />
            )}
        </div>
    )
}
