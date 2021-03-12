import React from 'react'
import { DefaultPageContainer } from '../../src/components/DefautPageContainer'
import Text from '../../src/components/design-system/atoms/Text'
import ProfileSection from '../../src/components/Templates/Profile'

const about = () => {
    return (
        <>
            <ProfileSection page="contact" />
            <DefaultPageContainer>
                <Text
                    as="h1"
                    variant="SectionTitle"
                    style={{ paddingTop: '4rem' }}
                >
                    Página em construção!
                </Text>
            </DefaultPageContainer>
        </>
    )
}

export default about
