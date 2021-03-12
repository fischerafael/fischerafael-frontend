import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'
import Text from '../design-system/atoms/Text'
import CustomLink from '../design-system/molecules/CustomLink'
import ProfileAvatarImage from '../design-system/organisms/ProfileAvatarImage'
import { SocialIconsNav } from '../SocialIconsNav'

interface Props {
    name: string
    title: string
    isOpen: boolean
}

const Main = ({ isOpen, name, title }: Props) => {
    return (
        <MainStyle>
            <ProfileMainStyle>
                <ProfileAvatarImage
                    src="https://avatars.githubusercontent.com/u/47259718?v=4"
                    alt="Rafael Fischer"
                />
                <Text as="h1" variant="MainTitle">
                    {name}
                </Text>
                <Text as="h2" variant="SubTitle" style={{ margin: '0' }}>
                    {title}
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
        </MainStyle>
    )
}

export default Main

export const MainStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10rem;
    min-height: 85vh;
    background: radial-gradient(
        44.33% 39.07% at 50% 50%,
        #222222 0%,
        #141414 100%
    );
    z-index: 1;
`
export const ProfileMainStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
