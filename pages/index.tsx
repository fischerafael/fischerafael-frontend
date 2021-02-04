import CustomHead from '../src/components/Head'
import HeroSection from '../src/components/organisms/HeroSection'

import { GetStaticProps } from 'next'
import styled from 'styled-components'

import gitHubApi from '../src/services/github-api'

const home = ({ userData }) => {
    console.log(userData)
    return (
        <PageLayoutStyle>
            <CustomHead pageTitle="Rafael Fischer" />
            <HeroSection />
        </PageLayoutStyle>
    )
}

export default home

export const PageLayoutStyle = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;
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
