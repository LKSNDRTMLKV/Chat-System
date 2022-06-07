
import React, { useContext, useRef, useCallback } from 'react';

//npm imports
import styled from 'styled-components';

//component imports
import NewPost from '../../Components/NewPost/NewPost';
import Post from '../../Components/Post/Post'
import SkeletonFeed from '../../Components/Skeleton/SkeletonFeed';
import { Text24 } from '../../Components/Text/Text';

//other imports
import { GlobalContext } from '../../Context/GlobalContext';

//styled-components
const NewsFeedWrapper = styled.div`
    width: 100%;
    .no-more-posts-container{
        text-align: center;
    }
`

//component
const NewsFeed = () => {
    const { newsFeed, setFeedOffset, lastPostId, hasMorePosts, waitForAxios, setWaitForAxios } = useContext(GlobalContext);
    const observer = useRef();
    const lastPostRef = useCallback((node) => {
        //ako imas observer.current, diskonektiraj go
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMorePosts && !waitForAxios) {
                console.log("if")
                setWaitForAxios(true);
                setFeedOffset(newsFeed.length);
            }
        })

        if (node) {
            observer.current.observe(node)
        }
    })

    return (
        <NewsFeedWrapper>
            <NewPost />
            {newsFeed && newsFeed.length > 0
                && newsFeed.map((post, index) => {
                    if (lastPostId === post.id) {
                        return (
                            <div key={index} ref={lastPostRef}>
                                <Post key={index} userName={post.user} textContent={post.text} />
                            </div>
                        )
                    } else {
                        return (
                            <Post key={index} userName={post.user} textContent={post.text} />
                        )
                    }
                })
            }
            {hasMorePosts
                ? <SkeletonFeed />
                : <div className="no-more-posts-container">
                    <Text24>NO MORE POSTS</Text24>
                </div>
            }
        </NewsFeedWrapper>
    );
}

export default NewsFeed;