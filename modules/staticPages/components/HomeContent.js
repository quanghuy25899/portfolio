import React from 'react';
import styled from 'styled-components';

import HeadingContent from './heading/HeadingContent';
import BodyContent from './body/BodyContent';
import FooterContent from './footer/FooterContent';

const StyledWrapper = styled.div`
    margin: 20px 100px 20px 100px;
`;

const HomeContent = () => {
    return (
        <StyledWrapper>
            <HeadingContent />
            <BodyContent />
            <div className="divider" />
            <FooterContent />
        </StyledWrapper>
    );
};

export default HomeContent;
