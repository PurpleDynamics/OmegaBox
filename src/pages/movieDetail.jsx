import { useQuery } from '@tanstack/react-query';
import SkeletonMovieDetail from 'components/skeleton/skeleton-detail';
import React from 'react';
import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { movieDetailApi } from '../apis/apiConfig';
import StyledBtn from '../components/button';

const MovieVideo = React.lazy(
    () => import('components/movie-detail/MovieVideo'),
);

const MovieDetailPage = () => {
    const [params] = useSearchParams();
    const movieId = params.get('movie_id');

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movieDetailData', movieId],
        queryFn: () => movieDetailApi(movieId),
    });

    useEffect(() => {
        const preloadLink = document.createElement('link');
        preloadLink.href = `https://image.tmdb.org/t/p/w300${data?.poster_path}`;
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        document.head.appendChild(preloadLink);

        return () => {
            if (preloadLink) {
                document.head.removeChild(preloadLink);
            }
        };
    }, [data]);

    if (isPending) return <SkeletonMovieDetail />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <>
            <Styled.Wrapper>
                <Styled.Container>
                    <Styled.ImgBox>
                        <Img
                            alt="image"
                            src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
                        />
                    </Styled.ImgBox>
                    <Styled.TextBox>
                        <h1>{data.title}</h1>
                        <p>{data.original_title}</p>
                        <h3>{data.tagline}</h3>
                        <p>개봉일 : {data.release_date}</p>
                        <p>
                            장르 :{' '}
                            {data.genres.map((item, index) => (
                                <span key={index}> {item.name}</span>
                            ))}
                        </p>
                        <p>평점 : {parseFloat(data.vote_average).toFixed(1)}</p>
                    </Styled.TextBox>
                </Styled.Container>
                <Styled.TextContent>
                    <Styled.TextMenuBox>
                        <StyledBtn
                            backgroundColor={'#fff'}
                            color={'#000'}
                            width="200px"
                            boxShadow={'none'}
                        >
                            간략 정보
                        </StyledBtn>
                        <Styled.TextMenuItem>
                            {data.overview}
                        </Styled.TextMenuItem>
                    </Styled.TextMenuBox>
                </Styled.TextContent>
                <h1>영상</h1>
                <Styled.MovieBox>
                    <Suspense fallback={<div>Loading video</div>}>
                        <MovieVideo />
                    </Suspense>
                </Styled.MovieBox>
            </Styled.Wrapper>
        </>
    );
};
export default MovieDetailPage;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Img = styled.img`
    width: 200px;
    height: 300px;
    aspect-ratio: 200/300; // 비율
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
    padding-top: 30px;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    padding-left: 70px;
`;

const Styled = {
    Wrapper,
    Img,
    Container,
    ImgBox,
    TextBox,
    MovieBox,
    TextContent,
    TextMenuBox,
    TextMenuItem,
};
