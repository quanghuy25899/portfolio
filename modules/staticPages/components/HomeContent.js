import React from 'react';
import styled from 'styled-components';

import HeadingContent from './heading/HeadingContent';
import BodyContent from './body/BodyContent';
import FooterContent from './footer/FooterContent';

const StyledBodyWrapper = styled.div`
    a:link {
        color: #4caf50 !important;
        text-decoration: underline !important;
    }
    a:visited {
        color: #4caf50 !important;
        text-decoration: underline !important;
    }
    a:hover {
        color: #4caf50 !important;
        text-decoration: underline !important;
    }
    a:active {
        color: #bfbfbf !important;
        text-decoration: underline !important;
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
