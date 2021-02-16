import { Droppable } from 'react-beautiful-dnd'
import { useAppContext } from 'hooks'
import { randomKey } from 'utils'

import { TaskItem } from 'components'

const TaskStatusLabel = {
    1: 'pending',
    2: 'process',
    3: 'ending',
}

export default function TaskList({ type = -1 }) {
    const [state] = useAppContext()

    return (
        <Droppable droppableId={TaskStatusLabel[type]}>
            {provided => (
                <div
                    className={`TaskList ${TaskStatusLabel[type]}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {type === 1 && <h3 className='Title'>Pendientes</h3>}

                    {type === 2 && <h3 className='Title'>En proceso</h3>}

                    {type === 3 && <h3 className='Title'>Finalizadas</h3>}

                    {state.tasks.length === 0 && (
                        <p className='empty'>Sin tareas para mostrar</p>
                    )}

                    {state.tasks.map(item => {
                        if (item.TaskStateId === type) {
                            return <TaskItem key={randomKey()} data={item} />
                        }
                    })}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
