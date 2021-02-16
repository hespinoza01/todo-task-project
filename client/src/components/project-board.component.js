import { useState, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { IoIosAddCircle } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

import { Button, ProjectForm, TaskForm, TaskList } from 'components'

import { useAppContext, useLoader } from 'hooks'
import { actions } from 'store'
import { TaskService } from 'services'
import { TaskStatus } from 'utils'

const TaskStatusIdList = {
    pending: 1,
    process: 2,
    ending: 3,
}

export default function ProjectBoard({ data = {} }) {
    const [state, dispatch] = useAppContext()
    const [loader] = useLoader()

    const [project, setProject] = useState({})
    const [editProject, setEditProject] = useState(false)
    const [addTask, setAddTask] = useState(false)

    const configureComponent = async _ => {
        loader.show()
        const tasks = await TaskService.getTaskFromProject(data.id)

        dispatch(actions.SET_TASKS, tasks)
        setProject(data)
        loader.hide()
    }

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

    /**
     * capture drag end for task cards
     * @param {Object} result
     */
    const onDrangEnd = async result => {
        loader.show()

        // create a copy from tasks
        const taskList = [...state.tasks]
        // find index of task to upudate
        const taskIndex = taskList.findIndex(
            item => item.id === parseInt(result.draggableId)
        )
        // get new task status
        const newStatus = TaskStatusIdList[result.destination.droppableId]

        // updated status for task
        const taskUpdated = taskList[taskIndex]
        taskUpdated.TaskStateId = newStatus
        taskList[taskIndex].TaskStateId = newStatus

        // store updated task into db
        const response = await TaskService.updateTask(
            data.id,
            taskUpdated,
            false
        )

        if (Object.keys(response).length > 0) {
            dispatch(actions.SET_TASKS, taskList)
        }

        loader.hide()
    }

    useEffect(
        _ => {
            if (Object.keys(data).length > 0) {
                configureComponent()
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

            <div className='task-content'>
                <DragDropContext onDragEnd={onDrangEnd}>
                    <TaskList type={TaskStatus.PENDING} />
                    <TaskList type={TaskStatus.IN_PROCESS} />
                    <TaskList type={TaskStatus.ENDED} />
                </DragDropContext>
            </div>

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
