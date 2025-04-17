/* 


export default function HeaderImg({viteLogo , reactLogo}) {
    return (
        <>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </>
    );
} */


const HeaderImg =  (props) => {
    return (
        <>
            <a href="https://vite.dev" target="_blank">
                <img src={props.viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={props.reactLogo} className="logo react" alt="React logo" />
            </a>
        </>
    );
}
export default HeaderImg