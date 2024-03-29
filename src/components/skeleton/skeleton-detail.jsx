import React from 'react';
import styled from 'styled-components';

import SkeletonBase from './skeleton-base';

const SkeletonMovieDetail = () => {
    return (
        <React.Fragment>
            <Container>
                <Wrapper>
                    <Container>
                        <ImgBox>
                            <SkeletonBase
                                width={'200px'}
                                height={'300px'}
                                borderRadius={'4px'}
                            />
                        </ImgBox>
                        <TextBox>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <SkeletonBase
                                    key={index}
                                    width={'250px'}
                                    height={'50px'}
                                />
                            ))}
                        </TextBox>
                    </Container>
                    <TextContent>
                        <TextMenuBox>
                            <SkeletonBase width={'100px'} height={'50px'} />
                            <SkeletonBase width={'400px'} height={'200px'} />
                        </TextMenuBox>
                    </TextContent>
                </Wrapper>
            </Container>
        </React.Fragment>
    );
};

export default SkeletonMovieDetail;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Container = styled.div`
    width: 70%;
    padding-top: 90px;
    display: flex;
    justify-content: space-evenly;
`;

const ImgBox = styled.div``;

const TextBox = styled.div`
    width: 60%;
`;

const TextContent = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
`;
const TextMenuBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
