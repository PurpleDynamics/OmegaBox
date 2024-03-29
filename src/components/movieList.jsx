import React from 'react';
import styled from 'styled-components';

import ButtonComponent from './button';
import MovieListItem from './movieListItem';
import ScrollUp from './ScrollUp';
import SkeletonMovieList from './skeleton/skeleton-movie-list';

export const MovieList = ({
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    lastMovieRef,
}) => {
    const lastPageIndex = data?.pages.length - 1;
    const lastMovieIndex = data?.pages[lastPageIndex]?.results.length - 1;
    const isLoadingInitData = isFetching && !data?.pages.length;

    return (
        <Styled.Container>
            <Styled.Wrapper>
                {data?.pages.map((el, index) => (
                    <React.Fragment key={index}>
                        {/* 페이지안에 영화(el)들을 map돌려서 */}
                        {el.results.map((movie, idx) => {
                            const isLastItem =
                                index === lastPageIndex &&
                                idx === lastMovieIndex
                                    ? { ref: lastMovieRef }
                                    : {};
                            return (
                                <MovieListItem
                                    key={movie.id}
                                    data={el}
                                    listData={movie}
                                    listIndex={idx}
                                    ref={isLastItem ? lastMovieRef : null}
                                />
                            );
                        })}
                    </React.Fragment>
                ))}
                {isFetchingNextPage ||
                    (isLoadingInitData && <SkeletonMovieList />)}
                <ScrollUp />
                <div>
                    <ButtonComponent
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                    >
                        {hasNextPage ? 'Load More' : 'Nothing more to load'}
                    </ButtonComponent>
                </div>
            </Styled.Wrapper>

            <div>
                {/* 데이터 로딩 중임을 나타내는 메시지를 표시 */}
                {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
            </div>
        </Styled.Container>
    );
};

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    position: fixed;
    top: 15px;
    z-index: 100;
`;

const Wrapper = styled.div`
    width: 1280px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 150px;
    // padding-left: 50px;
    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 100px;
    }
`;

const Styled = {
    Wrapper,
    ButtonWrapper,
    Container,
};
