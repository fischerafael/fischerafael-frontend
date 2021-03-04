import { GetStaticProps } from 'next'

import { data } from '../src/external/data'

import HeroSection from '../src/external/ui/components/organisms/HeroSection'
import BioSection from '../src/external/ui/components/organisms/BioSection'
import { PageContainerStyle } from '../src/external/ui/components/templates/PageStyle'
import ExperienceSection from '../src/external/ui/components/organisms/ExperienceSection'

const Home = ({ data }) => {
    console.log('userData', data)

    return (
        <PageContainerStyle>
            <HeroSection
                name={data.pt.personal.name}
                avatar={data.pt.personal.avatar}
                title={data.pt.personal.title}
                github={data.pt.links.github}
                linkedin={data.pt.links.linkedin}
                blog={data.pt.links.blog}
            />
            <BioSection title="Sobre" bio={data.pt.personal.bio} />
            <ExperienceSection
                title="Experiências Profissionais"
                experiences={data.pt.professional}
            />
            <ExperienceSection
                title="Educação"
                experiences={data.pt.education}
            />
            <ExperienceSection
                title="Certificações, Cursos e Bootcamps"
                experiences={data.pt.certification}
            />
            <ExperienceSection
                title="Tecnologias"
                experiences={data.pt.techs}
                single
            />
            <ExperienceSection
                title="Design"
                experiences={data.pt.design}
                single
            />
            <ExperienceSection
                title="Idiomas"
                experiences={data.pt.languages}
                single
            />
        </PageContainerStyle>
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
