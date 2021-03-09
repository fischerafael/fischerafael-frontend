import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../design-system/molecules/FlexContainer'
import Text from '../../../design-system/molecules/Text'

interface Props {
    img: string
    title: string
    description: string
    tags?: string[]
}

const FeatureCard = ({ img, title, description, tags }: Props) => {
    return (
        <FlexContainer
            background="dark"
            direction="column"
            style={{ padding: '6rem 2rem' }}
        >
            <img src={`/${img}`} alt="Desenvolvimento" />
            <Text
                color="light"
                as="h2"
                style={{
                    paddingTop: '4rem',
                    fontWeight: '900',
                    fontSize: '1.25rem',
                    textAlign: 'center',
                    lineHeight: '1.75rem'
                }}
            >
                {title}
            </Text>
            <FlexContainer align="center" style={{ paddingTop: '1rem' }}>
                <Text
                    color="light"
                    as="h2"
                    style={{
                        fontWeight: 'normal',
                        fontSize: '1rem',
                        textAlign: 'center',
                        lineHeight: '1.5rem'
                    }}
                >
                    {description}
                </Text>
            </FlexContainer>
            {tags && (
                <FlexContainer style={{ flexWrap: 'wrap', marginTop: '2rem' }}>
                    {tags &&
                        tags.map((tag) => (
                            <Text
                                as="p"
                                color="light"
                                style={{
                                    background: '#141414',
                                    margin: '.5rem',
                                    padding: '.75rem',
                                    fontSize: '.75rem'
                                }}
                            >
                                {tag}
                            </Text>
                        ))}
                </FlexContainer>
            )}
        </FlexContainer>
    )
}

export default FeatureCard
