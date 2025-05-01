/* export default function Tabs({ children , button}) {
    return <>
        <menu>
            {button}
        </menu>
        {children}
    </>
} */

export default function Tabs({ children, button, buttonContainer }) {
    const ButtonContainer = buttonContainer;
    return <>
        <ButtonContainer>
            {button}

        </ButtonContainer>
        {children}
    </>
}