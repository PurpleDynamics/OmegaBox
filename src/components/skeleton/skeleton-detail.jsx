import React from 'react';
import styled from 'styled-components';

import SkeletonBase from './skeleton-base';

const SkeletonMovieDetail = () => {
    return (
        <React.Fragment>
            <Container>
                <>
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
                                <SkeletonBase
                                    width={'400px'}
                                    height={'200px'}
                                />
                            </TextMenuBox>
                        </TextContent>
                        <SkeletonBase width={'10px'} height={'50px'} />
                        <MovieBox>
                            {/* <Suspense fallback={<div>loading video....</div>}>
                                <MovieVideo />
                            </Suspense> */}
                            <SkeletonBase width={'400px'} height={'250px'} />
                        </MovieBox>
                    </Wrapper>
                </>
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
// const BackgroundWrapper = styled.div`
//     width: 100%;
//     height: 500px;
//     padding: 90px 0;
//     background-image: url(${props => props.$backgroundImage});
//     background-size: cover;
//     background-position: center;
// `;

const Img = styled.img`
    width: 200px;
    height: 300px;
    aspect-ratio: 200/300;
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

const MovieBox = styled.div`
    margin-top: 30px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
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

const TextMenuItem = styled.p`
    margin-left: 70px;
`;
