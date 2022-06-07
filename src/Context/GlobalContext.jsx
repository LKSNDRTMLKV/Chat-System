import React, { createContext, useState, useEffect } from 'react';

//npm imports
import { navigate } from '@reach/router'

//other imports
import { API } from '../Consts/Api';
import { useFetchMorePosts } from '../Hooks/useFetchMorePosts';

export const GlobalContext = createContext({});

const { Provider } = GlobalContext;

export const GlobalContextProvider = props => {
    const [user, setUser] = useState({
        userName: "boko_buva",
        token: ""
    });
    const [newsFeed, setNewsFeed] = useState([]);
    const [feedOffset, setFeedOffset] = useState(0);
    const [lastPostId, setLastPostId] = useState();

    const { morePosts, hasMorePosts, setHasMorePosts, waitForAxios, setWaitForAxios, loadPosts } = useFetchMorePosts(feedOffset);

    useEffect(() => {
        morePosts && morePosts.length > 0 && setNewsFeed([...newsFeed, ...morePosts])
    }, [morePosts])

    useEffect(() => {
        if (newsFeed.length > 0) {
            let temporaryFeed = [...newsFeed];
            let lastPostId = temporaryFeed.pop().id;
            setLastPostId(lastPostId);
        }
    }, [newsFeed])

    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            let savedUser = JSON.parse(localStorage.getItem("user"));
            // "{userName: 'Bojan Stojkovski', token: 'asdal;skd'}"
            setUser({ ...user, userName: savedUser.userName })
        } else {
            navigate(API.paths.login);
        }
    }, [])

    const post = (user_name, text, setNewPost) => {
        let formData = new FormData();

        formData.append("user", user_name);
        formData.append("text", text);
        API.axios.post(API.routes.post, formData)
            .then(() => {
                setNewPost("");
                setNewsFeed([]);
                loadPosts(0);
            })
            .catch(error => console.log(error))
    }

    const globalState = {
        user,
        setUser,
        newsFeed,
        setNewsFeed,
        lastPostId,
        setLastPostId,
        waitForAxios,
        setWaitForAxios,
        setFeedOffset,
        hasMorePosts,
        post
    }

    return (
        <Provider value={globalState}>
            {props.children}
        </Provider>
    )
}