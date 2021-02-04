import CustomSocialLink from '../../atoms/CustomSocialLink'
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'

const SocialLinksContainer = () => {
    return (
        <div className="social-links">
            <CustomSocialLink href="https://www.linkedin.com/in/fischerafael/">
                <FaGithub
                    style={{
                        width: '25px',
                        height: '25px',
                        color: 'white'
                    }}
                />
            </CustomSocialLink>
            <CustomSocialLink href="https://www.linkedin.com/in/fischerafael/">
                <FaLinkedin
                    style={{
                        width: '25px',
                        height: '25px',
                        color: 'white'
                    }}
                />
            </CustomSocialLink>
            <CustomSocialLink href="https://www.linkedin.com/in/fischerafael/">
                <FaInstagram
                    style={{
                        width: '25px',
                        height: '25px',
                        color: 'white'
                    }}
                />
            </CustomSocialLink>
            <CustomSocialLink href="https://www.linkedin.com/in/fischerafael/">
                <FaYoutube
                    style={{
                        width: '25px',
                        height: '25px',
                        color: 'white'
                    }}
                />
            </CustomSocialLink>
        </div>
    )
}

export default SocialLinksContainer
