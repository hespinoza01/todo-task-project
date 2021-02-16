import { Draggable } from 'react-beautiful-dnd'

export default function TaskItem({ data }) {
    return (
        <Draggable
            key={`${data.id}`}
            draggableId={`${data.id}`}
            index={data.id}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='TaskItem'
                >
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </div>
            )}
        </Draggable>
    )
}
