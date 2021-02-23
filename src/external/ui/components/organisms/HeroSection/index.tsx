import React from 'react'
import styled from 'styled-components'

import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa'

import CustomLink from '../../molecules/CustomLink'
import { TwoColContainerStyle } from '../TwoColContainerStyle'

interface Props {
    avatar: string
    name: string
    title: string
    linkedin: string
    github: string
    blog: string
}

const HeroSection = ({
    avatar,
    name,
    title,
    linkedin,
    github,
    blog
}: Props) => {
    return (
        <HeroSectionContainerStyle>
            <AvatarStyle src={avatar} alt={name} />
            <HeroContentContainerStyle>
                <h1>{name}</h1>
                <h2>{title}</h2>
                <SocialLinkContainerStyle>
                    <CustomLink url={linkedin} newTab>
                        <CustomLinkedin />
                    </CustomLink>
                    <CustomLink url={github} newTab>
                        <CustomGithub />
                    </CustomLink>
                    <CustomLink url={blog} newTab>
                        <CustomSite />
                    </CustomLink>
                </SocialLinkContainerStyle>
            </HeroContentContainerStyle>
        </HeroSectionContainerStyle>
    )
}

export default HeroSection

export const HeroSectionContainerStyle = styled(TwoColContainerStyle)`
    min-height: 100vh;
`
export const AvatarStyle = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;

    align-self: center;
    justify-self: center;

    @media (max-width: 576px) {
        align-self: flex-end;
    }
`
export const HeroContentContainerStyle = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font: 900 3rem 'Roboto', serif;
        margin: 1rem 0;

        @media (max-width: 576px) {
            text-align: center;
        }
    }

    h2 {
        @media (max-width: 576px) {
            text-align: center;
        }
    }
`
export const SocialLinkContainerStyle = styled.div`
    min-height: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;

    @media (max-width: 576px) {
        justify-content: center;
    }
`
export const CustomLinkedin = styled(FaLinkedin)`
    color: #333;
    transition: 0.5s;

    &:hover {
        color: #2fd7e7;
    }
`
export const CustomGithub = styled(FaGithub)`
    color: #333;
    transition: 0.5s;
    &:hover {
        color: #2fd7e7;
    }
`
export const CustomSite = styled(FaGlobe)`
    color: #333;
    transition: 0.5s;
    &:hover {
        color: #2fd7e7;
    }
`
