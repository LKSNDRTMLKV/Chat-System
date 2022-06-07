import React from 'react';

//imports
import styled from 'styled-components';

import SkeletonPost from './SkeletonPost';

//styled-components
const SkeletonFeedWrapper = styled.div`
    width: 100%;
    padding-bottom: 10px;
`

//component
const SkeletonFeed = () => {
    return (
        <SkeletonFeedWrapper>
            {Array(3).fill().map((post, index) => (
                <SkeletonPost key={index} />
            ))}
        </SkeletonFeedWrapper>
    );
}

export default SkeletonFeed;