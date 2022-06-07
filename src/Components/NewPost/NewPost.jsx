import React, { useContext, useState } from 'react';

//npm imports
import styled from 'styled-components';

//component imports
import Button from '../Button/Button';

//other imports
import { GlobalContext } from '../../Context/GlobalContext';


//styled-components
const NewPostWrapper = styled.div`
    width: 95%;
    background-color: ${props => props.theme.dark_gray2};
    border-radius: 8px;
    padding: 10px;
    margin: 5px auto;

    .new-post-top-section{
        padding-bottom: 8px;
        border-bottom: 1px solid ${props => props.theme.text_gray};
        textarea{
            width: 100%;
            padding: 11px 5px;
            background-color: ${props => props.theme.dark_gray3};
            border: none;
            border-radius: 8px;
            &:focus{
                outline: none;
            }
        }
    }
    .new-post-bottom-section{
        display: flex;
        justify-content: flex-end;
        padding-top: 8px;
        button{
            width: 25%;
        }
    }
`

//component
const NewPost = () => {
    const { user, post } = useContext(GlobalContext);
    const [newPostContent, setNewPostContent] = useState("");

    return (
        <NewPostWrapper>
            <div className="new-post-top-section">
                <textarea
                    rows={4}
                    type="text"
                    placeholder={`What's on your mind ${user.userName}?`}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    value={newPostContent}
                />
            </div>
            <div className="new-post-bottom-section">
                <Button
                    text="Post"
                    disabled={newPostContent === ""}
                    type="button"
                    onClick={() => post(user.userName, newPostContent, setNewPostContent)}
                />
            </div>
        </NewPostWrapper>
    );
}

export default NewPost;