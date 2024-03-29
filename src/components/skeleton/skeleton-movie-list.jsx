import React from 'react';
import styled from 'styled-components';

const { default: SkeletonBase } = require('./skeleton-base');

const SkeletonMovieList = () => {
    return (
        <React.Fragment>
            {Array.from({ length: 10 }).map((_, index) => (
                <Container key={index}>
                    <SkeletonBase
                        width={'170px'}
                        height={'50px'}
                        borderRadius={'4px'}
                    />
                    <SkeletonBase
                        width={'170px'}
                        height={'100px'}
                        borderRadius={'4px'}
                    />
                    <SkeletonBase
                        width={'100px'}
                        height={'30px'}
                        borderRadius={'4px'}
                    />
                    <SkeletonBase
                        width={'170px'}
                        height={'70px'}
                        borderRadius={'4px'}
                    />
                </Container>
            ))}
        </React.Fragment>
    );
};

export default SkeletonMovieList;
const Container = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 4px;
    box-shadow: 2px 2px 2px 2px #eee;
    background-color: #fff;
    border-radius: 16px;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 1s;
    }
`;
