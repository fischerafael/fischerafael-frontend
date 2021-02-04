import styled from 'styled-components'

interface IOptionsCard {
    text: string
    setState(state: boolean): void
    state: boolean
}

const OptionsCard: React.FC<IOptionsCard> = ({
    children,
    text,
    setState,
    state
}) => {
    if (state)
        return (
            <OptionCardStyle
                style={{ background: '#2FD7E7' }}
                onClick={() => setState(!state)}
            >
                <div className="card-icon">{children}</div>
                <div className="card-content">
                    <h2>{text}</h2>
                </div>
            </OptionCardStyle>
        )

    return (
        <OptionCardStyle onClick={() => setState(!state)}>
            <div className="card-icon">{children}</div>
            <div className="card-content">
                <h2>{text}</h2>
            </div>
        </OptionCardStyle>
    )
}

export default OptionsCard

export const OptionCardStyle = styled.div`
    background: ${({ theme }) => theme.colors.ultraDark};
    border-radius: 10px;
    padding: 16px;

    height: 30vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s;

    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.dark};
    }

    .card-icon {
        width: 100%;
        height: 50%;

        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    .card-content {
        width: 100%;
        height: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        h2 {
            font-size: 12px;
            font-weight: 400;
            text-align: center;
            width: 90%;
        }
    }
`
