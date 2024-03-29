import styled, { keyframes } from 'styled-components';

import { colors } from '../../constants/design-token/color';

const SkeletonBase = ({ width, height, borderRadius }) => {
    return (
        <Wrapper>
            <Skeleton
                $width={width}
                $height={height}
                $borderRadius={borderRadius}
            />
        </Wrapper>
    );
};
export default SkeletonBase;

const loadingAnimation = keyframes`
    0% {
        transform: translateX(-100%)
    }
    100%{
        transform: translateX(100%)
    }
`;

const Wrapper = styled.div`
    padding: 10px;
`;

const Skeleton = styled.div`
    background-color: ${colors.secondary};
    border-radius: ${({ $borderRadius }) => $borderRadius};
    overflow: hidden;
    position: relative;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};

    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            ${colors.background},
            transparent
        );
        animation: ${loadingAnimation} 1.5s infinite linear;
    }
`;
