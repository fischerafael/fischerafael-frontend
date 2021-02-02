import CustomHead from '../../src/components/Head'
import NavBar from '../../src/components/NavBar'
import PageContainer from '../../src/components/PageContainer'
import projects from '../../src/database/projects.json'

const projetos = () => {
    console.log(projects)
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
