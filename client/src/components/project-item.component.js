export default function ProjectItem({ data, ...rest }) {
    return (
        <div className='ProjectItem' {...rest}>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <span>{data.createdAt}</span>
        </div>
    )
}
