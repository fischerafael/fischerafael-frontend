import CustomHead from '../src/components/Head'
import PageContainer from '../src/components/PageContainer'

const home = () => {
    return (
        <>
            <CustomHead pageTitle="Rafael Fischer" />
            <PageContainer twoColumnMain={true} />
            <PageContainer threeColumn={true} />
        </>
    )
}

export default home
