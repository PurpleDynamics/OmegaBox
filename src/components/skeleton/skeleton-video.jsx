import React from 'react';
import styled from 'styled-components';

import SkeletonBase from './skeleton-base';

const SkeletonVideo = () => {
    return (
        <React.Fragment>
            <Styled.Wrapper>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Styled.VideoBox key={index}>
                        <SkeletonBase width={'400px'} height={'250px'} />
                    </Styled.VideoBox>
                ))}
            </Styled.Wrapper>
        </React.Fragment>
    );
};

export default SkeletonVideo;
const Wrapper = styled.div`
    width: 100%;
    height: 2000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const VideoBox = styled.div`
    width: 400px;
    height: 250px;
    aspect-ratio: 400/250;
`;

const Styled = {
    Wrapper,
    VideoBox,
};
