import React from 'react';
import styled from 'styled-components';

import HeadingContent from './heading/HeadingContent';
import BodyContent from './body/BodyContent';
import FooterContent from './footer/FooterContent';

const StyledBodyWrapper = styled.div`
    a:link {
        color: #4caf50;
        text-decoration: underline;
    }
    a:visited {
        color: #4caf50;
        text-decoration: underline;
    }
    a:hover {
        color: #4caf50;
        text-decoration: underline;
    }
    a:active {
        color: #bfbfbf;
        text-decoration: underline;
    }
`;

const HomeContent = () => {
    return (
        <StyledBodyWrapper className="container">
            <HeadingContent />
            <BodyContent />
            <div className="divider" />
            <FooterContent />
        </StyledBodyWrapper>
    );
};

export default HomeContent;
