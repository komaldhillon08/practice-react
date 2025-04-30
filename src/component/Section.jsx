/*  export default function Section({title , id , className, children }) {
    return (
        <section id={id} className={className}>
            <h2>{title}</h2>
            {children}
        </section>
    );
    
} */
// Section.jsx
export default function Section({ title, children, ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
