export default function ProjectItem({ data, className = '', ...rest }) {
    return (
        <div className={`ProjectItem ${className}`} {...rest}>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <span>{data.createdAt}</span>
        </div>
    )
}
