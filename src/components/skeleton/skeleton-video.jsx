import React from 'react';
import styled from 'styled-components';

const { default: SkeletonBase } = require('./skeleton-base');

const SkeletonVideo = () => {
    return (
        <React.Fragment>
            <Container>
                <SkeletonBase
                    width={'400px'}
                    height={'250px'}
                    borderRadius={'4px'}
                />
            </Container>
        </React.Fragment>
    );
};

export default SkeletonVideo;
const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
