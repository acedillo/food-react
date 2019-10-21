import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MkA7z9RR0nRDzL07pgvCOYKflGNg-UmR4VZAf4ZW6TO6XbZh70SkgObwsKTeqXeRpg80Xr-Lluvsua3_B2sd3ovEMPZvycCTf88wLnr1BF6bWiP_eC1Mbd9DCO6tXXYx'
    }
})