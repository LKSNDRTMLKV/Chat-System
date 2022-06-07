import React, { memo, forwardRef } from 'react';

//npm imports
import styled from 'styled-components';

//component imports
import { UserName, Text10 } from '../Text/Text';
import Reaction from '../Reaction/Reaction';

//styled-components
const PostWrapper = styled.div`
    width: 80%;
    background-color: ${props => props.theme.dark_gray2};
    border-radius: 8px;
    margin: 10px auto;
    h5, p{
        color: ${props => props.theme.text_gray};
    }
    .post-header{
        width: 100%;
        padding: 15px 10px 5px 10px;
    }
    .post-text-content{
        padding: 5px 10px 10px 10px;
    }

    .post-video-container{
        width: 100%;
        margin: 0 auto;
    }

    .reactions-container{
        width: 90%;
        margin: 0 auto;
        display: flex;
        .reaction-container{
            width: 50%;
            padding: 15px 0;
            color: ${props => props.theme.text_gray};
            display: flex;
            justify-content: center;
            border-top: 1px solid ${props => props.theme.text_gray};
            p{
                margin-left: 5px;
            }
            &:hover {
                cursor: pointer;
                &,p{
                    color: ${props => props.theme.text_gray2};
                }
            }
        }
    }
`

export const reactions_items = [
    {
        icon: "hand-rock",
        text: "Bump"
    },
    {
        icon: "share",
        text: "Share"
    }
]
//component
const Post = forwardRef(({ userName, textContent }, ref) => {

    return (
        <PostWrapper ref={ref}>
            <div className="post-header">
                <UserName>{userName}</UserName>
            </div>
            <div className="post-text-content">
                <Text10>{textContent}</Text10>
            </div>
            <div className="reactions-container">
                {reactions_items.map((reaction, index) => <Reaction key={index} icon={reaction.icon} text={reaction.text} />)}
            </div>
        </PostWrapper>
    );
})

export default memo(Post);