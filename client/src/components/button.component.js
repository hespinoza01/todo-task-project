export default function Button({
    children,
    type = 'primary',
    text = '',
    onClick = () => {},
}) {
    return (
        <button className={`Button ${type}`} type={type} onClick={onClick}>
            {children || text}
        </button>
    )
}
