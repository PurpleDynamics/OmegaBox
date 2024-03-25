import React from 'react';
import styled from 'styled-components';

import ButtonComponent from './button';
import MovieListItem from './movieListItem';
import ScrollUp from './ScrollUp';

export const QueryComponents = ({
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    lastMovieRef,
}) => {
    console.log(data);

    return (
        <>
            <Styled.Wrapper>
                {/* 따로 뺄 수 있을꺼 같은데..... */}
                {/* 전체 페이지들을 map돌려서 */}
                {data?.pages.map((el, index) => (
                    <React.Fragment key={index}>
                        {/* 페이지안에 영화(el)들을 map돌려서 */}
                        {el.results.map((movie, idx) => (
                            <MovieListItem
                                data={el}
                                listData={movie}
                                listIndex={idx}
                                lastMovieRef={lastMovieRef}
                            />
                        ))}
                    </React.Fragment>
                ))}
                <ScrollUp />
                <div>
                    <ButtonComponent
                        onClick={() => fetchNextPage()} // 다음 페이지의 데이터를 불러옴
                        disabled={!hasNextPage || isFetchingNextPage} // 다음 페이지가 없거나 로딩 중이면 버튼 비활성화
                    >
                        {isFetchingNextPage
                            ? 'Loding more...'
                            : hasNextPage
                              ? 'Load More'
                              : 'Nothing more to load'}
                    </ButtonComponent>
                </div>
            </Styled.Wrapper>

            <div>
                {/* 데이터 로딩 중임을 나타내는 메시지를 표시 */}
                {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
            </div>
        </>
    );
};

const ButtonWrapper = styled.div`
    position: fixed;
    top: 15px;
    z-index: 100;
`;

const Wrapper = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
};
