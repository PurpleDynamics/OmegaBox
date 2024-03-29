import { useQuery } from '@tanstack/react-query';
import SkeletonVideo from 'components/skeleton/skeleton-video';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { movieVideoApi } from '../../apis/apiConfig';

const MovieVideo = () => {
    const [params] = useSearchParams();
    const movieId = params.get('movie_id');

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movieVideoData', movieId],
        queryFn: () => movieVideoApi(movieId),
    });

    if (isPending) return <SkeletonVideo />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <>
            <Styled.Wrapper>
                {data?.results.map(video => (
                    <Styled.VideoBox>
                        <iframe
                            key={video.id}
                            width="400px"
                            height="250px"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                            {video.site}
                        </iframe>
                    </Styled.VideoBox>
                ))}
            </Styled.Wrapper>
        </>
    );
};
export default MovieVideo;

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
