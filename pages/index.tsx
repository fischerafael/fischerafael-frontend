import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
        <PageContainerStyle>
            <TwoColContainerStyle>
                <img
                    src="https://avatars.githubusercontent.com/u/47259718?v=4"
                    alt="Rafael Fischer"
                />
                <div>
                    <h1>Rafael Fischer</h1>
                    <h2>Desenvolvedor Web & UI/UX Designer</h2>
                </div>
            </TwoColContainerStyle>
        </PageContainerStyle>
    )
}

export default Home

export const PageContainerStyle = styled.main`
    background: white;
    z-index: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
`
export const TwoColContainerStyle = styled.section`
    max-width: 1200px;
    width: 90%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`
