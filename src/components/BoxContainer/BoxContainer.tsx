const style = { margin: '80px 0' };

interface BoxContainerProps {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

export function BoxContainer({ children, title }: BoxContainerProps) {
    const titleElement = Boolean(title) ? <h3>{title}</h3> : null;
    return (
        <div className="box-container" style={style}>
            {titleElement}
            {children}
        </div>
    );
}
