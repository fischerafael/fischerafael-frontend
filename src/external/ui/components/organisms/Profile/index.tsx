import React, { useContext } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'

import Text from '../../../../../components/design-system/atoms/Text'
import CustomLink from '../../../../../components/design-system/molecules/CustomLink'
import ProfileAvatarImage from '../../../../../components/design-system/organisms/ProfileAvatarImage'
import { SocialIconsNav } from '../../../../../components/SocialIconsNav'
import { DataContext } from '../../../../../contexts/DataContext'
import { FlexContainer } from '../../_design-system/templates/FlexContainer'

const Profile = () => {
    const { portuguese } = useContext(DataContext)

    return (
        <FlexContainer
            as="main"
            style={{ paddingTop: '15vh', minHeight: '100vh' }}
        >
            <FlexContainer
                as="section"
                style={{ flexDirection: 'column', padding: '0 2rem' }}
            >
                <ProfileAvatarImage
                    src="https://avatars.githubusercontent.com/u/47259718?v=4"
                    alt="Rafael Fischer"
                />
                <Text as="h1" variant="MainTitle">
                    {portuguese.personal.name}
                </Text>
                <Text as="h2" variant="SubTitle" style={{ margin: '0' }}>
                    {portuguese.personal.bio}
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
            </FlexContainer>
        </FlexContainer>
    )
}

export default Profile
