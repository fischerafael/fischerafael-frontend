import CustomHead from '../src/components/Head'

import styled from 'styled-components'

const home = () => {
    return (
        <>
            <CustomHead pageTitle="Rafael Fischer" />
            <SectionContainerStyle>
                <SectionContentStyle>oi</SectionContentStyle>
            </SectionContainerStyle>
        </>
    )
}

export default home

export const SectionContainerStyle = styled.main`
    background: ${({ theme }) => theme.colors.dark};
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SectionContentStyle = styled.div`
    color: ${({ theme }) => theme.colors.ligth};
    background: ${({ theme }) => theme.colors.dark};
`
