export interface IDataProps {
    portuguese: IInfo
    english: IInfo
}

interface IInfo {
    personal: {
        bio: string
        name: string
        links: {
            linkedin: {
                img: string
                url: string
            }
            github: {
                img: string
                url: string
            }
            youtube: {
                img: string
                url: string
            }
            instagram: {
                img: string
                url: string
            }
        }
    }
    experience: {
        coverLetter: string
        professional: IProExp[]
    }
}

interface IProExp {
    id: number
    img: string
    title: string
    company: string
    location: string
    started: number
    finished: number
    current: boolean
    description: string
}
