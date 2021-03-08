import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../design-system/molecules/FlexContainer'
import Text from '../../../design-system/molecules/Text'

interface Props {
    type: 'code' | 'design' | 'content'
    title: string
    description: string
}

const FeatureCard = ({ type, title, description }: Props) => {
    return (
        <FlexContainer
            background="dark"
            direction="column"
            justify="flex-start"
            style={{ width: '100%', padding: '3rem' }}
        >
            <img src={`${type}.svg`} alt="Desenvolvimento" />
            <Text
                color="light"
                as="h2"
                style={{
                    padding: '3rem 0',
                    fontWeight: '900',
                    fontSize: '1.25rem',
                    textAlign: 'center',
                    lineHeight: '1.75rem'
                }}
            >
                {title}
            </Text>
            <FlexContainer style={{ height: '20vh', width: '100%' }}>
                <Text
                    color="light"
                    as="h2"
                    style={{
                        padding: '0 1rem',
                        fontWeight: 'normal',
                        fontSize: '1rem',
                        textAlign: 'center',
                        lineHeight: '1.5rem'
                    }}
                >
                    {description}
                </Text>
            </FlexContainer>
        </FlexContainer>
    )
}

export default FeatureCard
