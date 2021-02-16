import { useState, useEffect } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

import { Button, ProjectForm, TaskForm } from 'components'

import { useAppContext } from 'hooks'
import { actions } from 'store'

export default function ProjectBoard({ data = {} }) {
    const [state, dispatch] = useAppContext()
    const [project, setProject] = useState({})
    const [editProject, setEditProject] = useState(false)
    const [addTask, setAddTask] = useState(false)

    /**
     * Update a current project
     */
    const onUpdateProject = async response => {
        // create a copy from project list
        const projectList = [...state.projects]
        // find index for project to update
        const indexCurrentProject = projectList.findIndex(
            item => item.id === project.id
        )

        // update project info and update store
        projectList[indexCurrentProject] = response
        dispatch(actions.SET_PROJECTS, projectList)
        setProject(response)
        setEditProject(false)
    }

    /**
     * Update task list into state context
     * @param {Object} response
     */
    const onCreateTask = async response => {
        dispatch(actions.SET_TASKS, [...state.tasks, response])
        setAddTask(false)
    }

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
                    <Button onClick={_ => setEditProject(true)} type='text'>
                        <MdEdit size={20} className='Icon' />
                        editar proyecto
                    </Button>

                    <Button onClick={_ => setAddTask(true)}>
                        <IoIosAddCircle size={22} className='Icon' />
                        nueva tarea
                    </Button>
                </div>
            </header>
            <div className='state'>a</div>
            <div className='state'>b</div>
            <div className='state'>c</div>

            {editProject && (
                <ProjectForm
                    data={data}
                    onSubmit={onUpdateProject}
                    onCancel={_ => setEditProject(false)}
                />
            )}

            {addTask && (
                <TaskForm
                    projectId={data.id}
                    onSubmit={onCreateTask}
                    onCancel={_ => setAddTask(false)}
                />
            )}
        </div>
    )
}
