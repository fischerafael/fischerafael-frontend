import styled from 'styled-components'
import Button from '../Button'

const CTASection = () => {
    return (
        <CTASectionStyle>
            <h1>Desenvolvimento Web, UI & UX Design e Inovação</h1>
            <h2>
                Olá, me chamo Rafael Fischer e ajudo desenvolvedores, criativos
                e empresas.
            </h2>
            <Button main={true}>Saiba Mais</Button>
        </CTASectionStyle>
    )
}

export default CTASection

export const CTASectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 70%;

    h1 {
        margin-top: 20vh;

        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.textSizes.title};
        font-weight: 900;
    }

    h2 {
        color: ${({ theme }) => theme.colors.ligth};
        font-size: ${({ theme }) => theme.textSizes.subtitle};
        font-weight: 400;
    }
`
