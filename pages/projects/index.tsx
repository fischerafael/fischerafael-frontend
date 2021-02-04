import { GetStaticProps } from 'next'
import gitHubApi from '../../src/services/github-api'

import styled from 'styled-components'

import ProjectCard from '../../src/components/atoms/ProjectCard'

const Projects = ({ repos }) => {
    const gitHubProjects = repos as object[]

    return (
        <PageStyle>
            <HeadingSectionStyle>
                <h1>PROJETOS</h1>
                <h2>Programação, UI & UX Design</h2>
            </HeadingSectionStyle>

            <SearchSectionStyle>
                <div>
                    <label>
                        Pesquisar projeto
                        <input type="text" placeholder="Ex: React" />
                    </label>
                </div>
            </SearchSectionStyle>

            <ProjectSectionStyle>
                {gitHubProjects &&
                    gitHubProjects.map((project) => (
                        <ProjectCard
                            imgUrl="/hero-img.png"
                            title={project.name}
                            description={project.description}
                            tags={project.topics}
                            link=""
                        />
                    ))}
            </ProjectSectionStyle>

            {gitHubProjects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <h3>{project.description}</h3>
                    <ul>
                        {project.topics &&
                            project.topics.map((topic) => (
                                <li key={topic}>{topic}</li>
                            ))}
                    </ul>
                </div>
            ))}
            <div>
                <h2>Nome do Projeto</h2>
                <h3>Descrição do Projeto</h3>
            </div>
        </PageStyle>
    )
}

export default Projects

export const getStaticProps: GetStaticProps = async (context) => {
    const repos = await gitHubApi.get(
        '/users/fischerafael/repos?sort=created_at&per_page=10'
    )

    return {
        props: {
            repos: repos.data
        },
        revalidate: 60 * 60
    }
}

export const PageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1024px;
    width: 100%;

    background: ${({ theme }) => theme.colors.dark};
`
export const HeadingSectionStyle = styled.header`
    padding-top: 20vh;
    height: 50vh;
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 60px;
        font-family: sans-serif;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${({ theme }) => theme.colors.primary};
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }
`
export const SearchSectionStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 30vh;
    width: 90%;

    div {
        background: ${({ theme }) => theme.colors.ultraDark};
        height: 50%;
        width: 70%;
        min-width: 300px;
        border-radius: 15px;
        padding: 0 5%;

        display: flex;
        flex-direction: column;

        justify-content: center;

        label {
            display: flex;
            flex-direction: column;
            font-size: 12px;

            input {
                margin-top: 5px;
                background: transparent;
                border: none;
                outline: none;

                color: white;
                font-size: 18px;
            }
        }
    }
`
export const ProjectSectionStyle = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 36px;
    width: 90%;
`

export const OneColumnSectionStyle = styled.div`
    margin-top: 10vh;
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .text-container {
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 60px;
            font-family: sans-serif;
            color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: ${({ theme }) => theme.colors.primary};
        }
    }

    .search-box-container {
        background: ${({ theme }) => theme.colors.ultraDark};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        height: 30vh;
        width: 100%;
        max-width: 600px;
        margin-bottom: 10vh;
    }
`
