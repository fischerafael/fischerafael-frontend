import CustomHead from '../../src/components/Head'
import NavBar from '../../src/components/NavBar'
import PageContainer from '../../src/components/PageContainer'

const projetos = () => {
    return (
        <>
            <CustomHead pageTitle="Projetos - Rafael Fischer" />
            <NavBar />
            <PageContainer
                type="one-column"
                oneColumnProps={{
                    title: 'Projetos',
                    subTitle: 'Confira os projetos desenvolvidos'
                }}
            />
            <PageContainer type="three-column" />
        </>
    )
}

export default projetos
