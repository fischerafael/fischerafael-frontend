import Link from 'next/link'

interface ICustomSocialLink {
    href: string
}

const CustomSocialLink: React.FC<ICustomSocialLink> = ({ href, children }) => {
    return (
        <Link href={href ? href : '/'}>
            <a target="_blank">{children}</a>
        </Link>
    )
}

export default CustomSocialLink
