import React from 'react'
import styled from 'styled-components'
import { TwoColContainerStyle } from '../TwoColContainerStyle'

interface Props {
    title: string
    bio: string
}

const BioSection = ({ title, bio }: Props) => {
    return (
        <BioSectionContainerStyle>
            <h2>{title}</h2>
            <p>{bio}</p>
        </BioSectionContainerStyle>
    )
}

export default BioSection

export const BioSectionContainerStyle = styled(TwoColContainerStyle)`
    min-height: 50vh;
    margin: 2rem 0;

    h2 {
        align-self: flex-start;
        font: 900 2rem 'Roboto';
    }
    p {
        align-self: flex-start;
        font: 400 1rem 'Roboto Slab';
        line-height: 2rem;
    }
`
