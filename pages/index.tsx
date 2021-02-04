import CustomHead from '../src/components/organisms/Head'
import HeroSection from '../src/components/organisms/HeroSection'
import OptionsSection from '../src/components/organisms/OptionsSection'

import { GetStaticProps } from 'next'
import styled from 'styled-components'

import gitHubApi from '../src/services/github-api'

const home = ({ userData }) => {
    console.log(userData)
    return (
        <>
            <FullPageLayoutStyle>
                <CustomHead pageTitle="Rafael Fischer" />
                <HeroSection
                    title="Rafael Fischer"
                    subtitle="Developer, UI/UX Designer, Architect and PhD Student in Civil
                Engineering"
                    heroImage="hero-img.png"
                />
            </FullPageLayoutStyle>

            <HalfPageLayoutStyle>
                <OptionsSection />
            </HalfPageLayoutStyle>
        </>
    )
}

export default home

export const FullPageLayoutStyle = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;
`
export const HalfPageLayoutStyle = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    min-height: 50vh;
`

export const getStaticProps: GetStaticProps = async (context) => {
    //const userDataResponse = await gitHubApi.get('users/fischerafael')
    //const userData = userDataResponse.data
    const userData = {}

    return {
        props: {
            userData
        }
    }
}
