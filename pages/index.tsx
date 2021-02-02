import CustomHead from '../src/components/Head'
import NavBar from '../src/components/NavBar'
import PageContainer from '../src/components/PageContainer'

const home = () => {
    return (
        <>
            <NavBar />
            <CustomHead pageTitle="Rafael Fischer" />
            <PageContainer type="two-column-main" />
            <PageContainer type="three-column" />
        </>
    )
}

export default home
