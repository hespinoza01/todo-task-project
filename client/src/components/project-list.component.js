import { useState, useEffect } from 'react'
import { IoIosAddCircle } from 'react-icons/io'

// import components
import { ProjectItem, Button, ProjectForm } from 'components'

// import services
import { ProjectService } from 'services'

// import utils
import { randomKey } from 'utils'

export default function ProjectList({ onDetail = _ => {} }) {
    const [projects, setProjects] = useState([])
    const [addProject, setAddProject] = useState(false)

    /**
     * Init project settings
     */
    const configureComponent = async _ => {
        const data = await ProjectService.getProjectList()
        setProjects(data)
    }

    /**
     * Receive data from created project and append to project list
     * @param {Object} response
     */
    const onCreateProject = response => {
        setProjects([...projects, response])
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

            {projects.map(item => (
                <ProjectItem
                    onClick={_ => onDetail(item)}
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
