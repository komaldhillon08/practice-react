/* export const Buttons = (children) => {
    return (
        <>
        <li className="btn">
            <button>{children.text}</button>    
        </li>
        </>
    );
}
 */
export const Buttons = ({ children, onSelect }) => {
    return (
        <>
            <li className="btn">
                <button onClick={onSelect}>{children}</button>
            </li>
        </>
    );
}
