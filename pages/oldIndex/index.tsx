import { GetStaticProps } from 'next'

import { data } from '../../src/external/data'

import Flex from '../../src/external/components/Layout/Flex'
import CustomLink from '../../src/external/components/Navigation/CustomLink'
import Text from '../../src/external/components/Text'

const Home = ({ data }) => {
    console.log('userData', data)

    return (
        <>
            <Flex type="header" style={{ width: '100vw', height: '15vh' }}>
                <Flex
                    type="nav"
                    style={{
                        width: '90%',
                        maxWidth: '50rem',
                        justifyContent: 'space-between'
                    }}
                >
                    <CustomLink href="/">
                        <img
                            src="/fischerafael-long.svg"
                            alt="Rafael Fischer"
                        />
                    </CustomLink>

                    <Flex
                        type="nav"
                        style={{
                            maxWidth: '20rem',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <CustomLink href="/">Início</CustomLink>
                    </Flex>
                </Flex>
            </Flex>
            <Flex type="main" style={{ height: '85vh' }}>
                <Text
                    type="h1"
                    style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        maxWidth: '50rem'
                    }}
                >
                    RAFAEL FISCHER
                </Text>
            </Flex>
        </>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            data: data
        }
    }
}
