import { upcomingApi } from 'apis/apiConfig';
import { QueryComponents } from 'components/movieList';
import NavigationButton from 'components/navigationButton';
import { useInfiniteScrollQuery } from 'custom/useInfiniteScrollQuery';
import React from 'react';
import styled from 'styled-components';

const UpcomingPage = () => {
    const {
        data,
        lastMovieRef,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteScrollQuery({
        queryKey: ['upcomingData'],
        dataApi: upcomingApi,
    });

    if (isError) return <div>Error: {error.message}</div>;

    return (
        <>
            <Styled.Wrapper>
                <NavigationButton />
                <QueryComponents
                    data={data}
                    fetchNextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                    isFetching={isFetching}
                    isFetchingNextPage={isFetchingNextPage}
                    lastMovieRef={lastMovieRef}
                />
            </Styled.Wrapper>
        </>
    );
};
export default UpcomingPage;

const Wrapper = styled.div`
    width: calc(100vw - 50px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding-left: 50px;
    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 100px;
    }
`;

const Styled = {
    Wrapper,
};
