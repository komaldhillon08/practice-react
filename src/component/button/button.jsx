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
/* export const Buttons = ({ children, onSelect , selectTopic}) => {
    return (
        <>
            <li className="btn">
                <button  className={selectTopic}  onClick={onSelect}>{children}</button>
            </li>
        </>
    );
}
 */
export const Buttons = ({ children , selectTopic , ...props}) => {
    return (
        <>
            <li className="btn">
                <button  className={selectTopic ? 'active' : undefined}  {...props}>
                    {children}
                </button>
            </li>
        </>
    );
}
