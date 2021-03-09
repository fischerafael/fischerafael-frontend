import React from 'react'
import styled from 'styled-components'
import Text from '../src/components/design-system/atoms/Text'
import ProfileAvatarImage from '../src/components/design-system/organisms/ProfileAvatarImage'
import Header from '../src/components/Header'
import Main from '../src/components/Main'

import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
import CustomLink from '../src/components/design-system/molecules/CustomLink'

const Home = () => {
    return (
        <>
            <Header>
                <li>EN</li>
            </Header>
            <Main>
                <ProfileMainStyle>
                    <ProfileAvatarImage
                        src="https://avatars.githubusercontent.com/u/47259718?v=4"
                        alt="Rafael Fischer"
                    />
                    <Text as="h1" variant="MainTitle">
                        Rafael Fischer
                    </Text>
                    <Text as="h2" variant="SubTitle" style={{ margin: '0' }}>
                        Desenvolvedor Frontend & UI / UX Designer
                    </Text>
                    <SocialIconsNav>
                        <CustomLink
                            href="https://github.com/fischerafael"
                            target="_blank"
                        >
                            <FaGithub />
                        </CustomLink>
                        <CustomLink
                            href="https://www.linkedin.com/in/fischerafael/"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </CustomLink>
                        <CustomLink
                            href="https://www.youtube.com/channel/UCz75xXTimMhZkbK__XOM8hQ"
                            target="_blank"
                        >
                            <FaYoutube />
                        </CustomLink>
                        <CustomLink
                            href="https://www.instagram.com/fischerafael/"
                            target="_blank"
                        >
                            <FaInstagram />
                        </CustomLink>
                    </SocialIconsNav>
                </ProfileMainStyle>
            </Main>
        </>
    )
}

export default Home

export const ProfileMainStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SocialIconsNav = styled.nav`
    margin: 2rem 0;
    list-style: none;
    display: flex;
    gap: 1rem;
`
