import { useEffect, useState } from 'react';

//other imports
import { API } from '../Consts/Api';

export const useFetchMorePosts = (offset) => {
    const [morePosts, setMorePosts] = useState([]);
    const [hasMorePosts, setHasMorePosts] = useState(true);
    const [waitForAxios, setWaitForAxios] = useState(false);

    useEffect(() => {
        loadPosts(offset)
    }, [offset])

    const loadPosts = (offset) => {
        if (hasMorePosts) {
            API.axios.get(API.routes.offset + offset)
                .then(response => {
                    waitForAxios && setWaitForAxios(false);
                    if (response.data.status === true) {
                        setMorePosts(response.data.data);
                    } else {
                        setHasMorePosts(false);
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    return { morePosts, setMorePosts, hasMorePosts, setHasMorePosts, waitForAxios, setWaitForAxios, loadPosts }
}