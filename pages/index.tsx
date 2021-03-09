import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'

import Header from '../src/components/Header'
import Main from '../src/components/Main'

const Home = (props) => {
    const [data, setData] = useState(props.pt)
    const [en, setEn] = useState(true)

    useEffect(() => {
        if (en === true) {
            setData(props.en)
            return
        }
        setData(props.pt)
    }, [en])

    return (
        <>
            <Header>
                <li onClick={(e) => setEn((prevState) => !prevState)}>
                    {en ? 'EN' : 'PT'}
                </li>
            </Header>
            <Main name={data.personal.name} title={data.personal.title} />
        </>
    )
}

export default Home

const userData = {
    pt: {
        personal: {
            name: 'Rafael Fischer',
            title: 'Desenvolvedor Frontend & UI / UX Designer'
        }
    },
    en: {
        personal: {
            name: 'Rafael Fischer',
            title: 'Frontend Developer & UI / UX Designer'
        }
    }
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: userData
    }
}
