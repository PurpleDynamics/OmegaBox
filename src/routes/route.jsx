import ErrorFallBack from 'components/errorFallBack';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router-dom';

import {
    nowPlayingApi,
    popularApi,
    searchApi,
    topRatedApi,
    upcomingApi,
} from '../apis/apiConfig';
import RootLayout from '../layouts/layout';
import MainPage from '../pages/mainPage';
import MovieDetailPage from '../pages/movieDetail';
import SearchPage from '../pages/searchPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: (
                    <div style={{ paddingTop: '100px' }}>
                        <ErrorBoundary FallbackComponent={ErrorFallBack}>
                            <MainPage
                                queryKey={['popularData']}
                                dataApi={popularApi}
                            />
                        </ErrorBoundary>
                    </div>
                ),
            },
            {
                path: '/movie',
                element: <MovieDetailPage />,
            },
            {
                path: '/movie/upcoming',
                element: (
                    <MainPage
                        queryKey={['upcomingData']}
                        dataApi={upcomingApi}
                    />
                ),
            },
            {
                path: '/movie/now_playing',
                element: (
                    <MainPage
                        queryKey={['nowPlaying']}
                        dataApi={nowPlayingApi}
                    />
                ),
            },
            {
                path: '/movie/top_rated',
                element: (
                    <MainPage queryKey={['topRated']} dataApi={topRatedApi} />
                ),
            },
            {
                path: `/search/movie`,
                element: (
                    <SearchPage
                        queryKey={['searchData']}
                        dataApi={input => searchApi(input)}
                    />
                ),
            },
        ],
    },
]);
export default router;
