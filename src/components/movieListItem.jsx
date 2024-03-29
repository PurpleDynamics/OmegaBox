import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MovieListItem = forwardRef(({ data, listData, listIndex }, ref) => {
    const navigate = useNavigate();

    const handleDetailPage = movie_id => {
        const query = `?movie_id=${movie_id}`;
        navigate(`/movie/${query}`);
    };

    // 마지막 영화 항목에만 ref 적용
    const isLastItem = listIndex === data.results.length - 1;

    return (
        <Styled.Container
            ref={isLastItem ? ref : null}
            onClick={() => handleDetailPage(listData.id)}
        >
            <h3>{listData.title}</h3>
            <Styled.Img
                loading="lazy"
                src={
                    listData.poster_path
                        ? `https://image.tmdb.org/t/p/w200${listData.poster_path}`
                        : 'https://media.istockphoto.com/id/1162708357/ko/%EC%82%AC%EC%A7%84/%EC%B6%94%EC%83%81-%EA%B8%B0%EC%88%A0-%EB%B0%94%EC%9D%B4%EB%84%88%EB%A6%AC-%EC%BD%94%EB%93%9C-background-digital-%EB%B0%94%EC%9D%B4%EB%84%88%EB%A6%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%8F-%EB%B3%B4%EC%95%88-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%9C%EB%85%90%EA%B3%BC-%EB%84%90-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-n.jpg?s=2048x2048&w=is&k=20&c=0ON2C3YCS26ketQHj53wBtUZh9S5Jxp70KQXmAELG9U='
                }
                alt="image"
            />
            <Styled.P>
                ⭐평점: {parseFloat(listData.vote_average).toFixed(1)}
            </Styled.P>
            <Styled.P>{listData.overview.substring(0, 30)}...</Styled.P>
        </Styled.Container>
    );
});

export default MovieListItem;

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
const H3 = styled.h3`
    font-size: 15px;
`;
const P = styled.p`
    font-size: 13px;
`;

const Img = styled.img`
    width: 200px;
    height: 300px;
    object-fit: fill;
`;

const Styled = {
    Container,
    H3,
    Img,
    P,
};
