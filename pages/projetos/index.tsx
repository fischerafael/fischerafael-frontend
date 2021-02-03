import CustomHead from '../../src/components/Head'
import NavBar from '../../src/components/NavBar'
import PageContainer from '../../src/components/PageContainer'

import { projects } from '../../src/database/projects'

const projetos = () => {
    return (
        <>
            <CustomHead pageTitle="Projetos - Rafael Fischer" />
            <NavBar />
            <PageContainer
                type="one-column"
                oneColumnProps={{
                    title: 'Projetos',
                    subTitle: 'Confira os melhores projetos desenvolvidos'
                }}
            />
            <PageContainer
                type="three-column-cards"
                threeColumnCardsProps={{ projects: projects }}
            />
        </>
    )
}

export default projetos
