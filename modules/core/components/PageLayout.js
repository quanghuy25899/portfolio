import React from 'react';
import dynamic from 'next/dynamic';

import Header from './Header';
import Scroll from './Scroll';

const PageLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Scroll />

            <div>{children}</div>
        </>
    );
};

export default PageLayout;
