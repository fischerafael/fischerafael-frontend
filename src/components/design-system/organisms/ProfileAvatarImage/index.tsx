import React from 'react'
import styled from 'styled-components'

const ProfileAvatarImage = ({ src, alt }) => {
    return <ProfileAvatarStyle src={src} alt={alt} />
}

export default ProfileAvatarImage

export const ProfileAvatarStyle = styled.img`
    max-width: 10rem;
    max-height: 10rem;
    border-radius: 50%;

    border: 0.5rem solid ${({ theme }) => theme.color.primary};
`
