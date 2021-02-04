import axios from 'axios'

const gitHubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Accept: 'application/vnd.github.mercy-preview+json'
    }
})

export default gitHubApi
