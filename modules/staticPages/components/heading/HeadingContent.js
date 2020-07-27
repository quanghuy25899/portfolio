import React from 'react';
import styled from 'styled-components';

const StyledHeadingWrapper = styled.div`
    display: flex;
    background-color: #4dffb8;
`;

const HeadingContent = () => {
    return (
        <StyledHeadingWrapper>
            <img src="static/img/profilePic.jpg" alt="Profile" style={{ width: 200, height: 260 }} />
            <div style={{ marginLeft: 90 }}>
                <div style={{ fontSize: 50, marginBottom: 10, marginTop: 20 }}>Quang Huy Pham</div>
                <div style={{ fontSize: 20, marginBottom: 49 }}>Junior Web Developer</div>
                <p>Victoria, BC, Canada</p>
                <p>(+1) 778-922-6999 * brianpham2589@gmail.com</p>
            </div>
        </StyledHeadingWrapper>
    );
};

export default HeadingContent;
