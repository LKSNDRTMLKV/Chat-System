import React from 'react';

//npm imports
import styled, { withTheme } from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

//styled-components
const SkeletonPostWrapper = styled.div`
    width: 90%;
    height: 140px;
    margin: 10px auto;
    background-color: ${props => props.theme.dark_gray2};
    border-radius: 8px;
    padding: 15px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    &>span {
        margin-bottom: 10px;
        height: 20px;
    }
    &>div{
        width: 100%;
        height: 60px;
        padding: 10px 0 0 0 ;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &>span{
            width: 25%;
            height: 70%;
        }
    }
`

//component
const SkeletonPost = (props) => {
    return (
        <SkeletonTheme color={props.theme.dark_gray3} highlightColor={props.theme.dark_gray2} marginBottom="5px">
            <SkeletonPostWrapper>
                <Skeleton width={`20%`} height={`100%`} />
                <Skeleton width={`100%`} height={`100%`} />
                <div>
                    <Skeleton width={`100%`} height={`100%`} />
                    <Skeleton width={`100%`} height={`100%`} />
                </div>
            </SkeletonPostWrapper>
        </SkeletonTheme>
    );
}

export default withTheme(SkeletonPost);