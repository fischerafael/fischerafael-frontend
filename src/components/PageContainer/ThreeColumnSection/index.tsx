import VerticalCard from '../../VerticalCard'

import { PageContainerStyle } from '..'

import styled from 'styled-components'

interface IThreeColumnSection {
    projects?: IProject[]
}

const ThreeColumnSection: React.FC<IThreeColumnSection> = ({ projects }) => {
    return (
        <PageContainerStyle>
            <ThreeColumnContentStyle>
                {projects &&
                    projects.map((project) => (
                        <VerticalCard
                            imgUrl={project.thumbnail}
                            cardTitle={project.title}
                            cardText={project.description}
                            techs={project.techs}
                            cardButton="Ver Repositório"
                            urlLink={project.repo}
                            newPage={true}
                        />
                    ))}
            </ThreeColumnContentStyle>
        </PageContainerStyle>
    )
}

export default ThreeColumnSection

export const SectionContentStyle = styled.div`
    color: ${({ theme }) => theme.colors.ligth};

    max-width: 1024px;
    width: 90%;
    min-height: 50vh;
`
export const ThreeColumnContentStyle = styled(SectionContentStyle)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 36px;

    padding: 10vh 0;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
