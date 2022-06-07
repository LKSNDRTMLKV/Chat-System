import axios from 'axios';

let axiosSetup = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const API = {
    axios: axiosSetup,
    paths: {
        layout: "/layout",
        newsFeed: "/",
        homePage: "/",
        myProfile: "/my-profile/{USER_NAME}",
        login: "/login"
    },
    routes: {
        story: "/story",
        post: "/story",
        offset: "/story?offset="
    },
    storage: process.env.REACT_APP_STORAGE_URL
}