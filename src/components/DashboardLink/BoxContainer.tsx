const style = { margin: '80px 0' };
export function BoxContainer({ children }: any) {
    return (
        <div className="box-container" style={style}>
            {children}
        </div>
    );
}
