import React from 'react';

import HeadingContent from './heading/HeadingContent';
import BodyContent from './body/BodyContent';
import FooterContent from './footer/FooterContent';

const HomeContent = () => {
    return (
        <div className="container">
            <HeadingContent />
            <BodyContent />
            <div className="divider" />
            <FooterContent />
        </div>
    );
};

export default HomeContent;
