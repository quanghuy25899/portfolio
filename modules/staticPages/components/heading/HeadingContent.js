import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const StyledRow = styled(Row)`
    background-color: #008060;
    color: white;
    margin-top: 60px;
`;

const HeadingContent = () => {
    return (
        <StyledRow>
            <Col xs={24} md={8} lg={7}>
                <img src="static/img/profilePic.jpg" alt="Profile" style={{ width: 200, height: 260 }} />
            </Col>
            <Col xs={24} md={16} lg={17}>
                <div>
                    <div style={{ fontSize: 50, marginBottom: 10, marginTop: 20 }}>Quang Huy Pham</div>
                    <div style={{ fontSize: 20, marginBottom: 49 }}>Junior Web Developer</div>
                    <p>Victoria, BC, Canada</p>
                    <p>(+1) 778-922-6999 * brianpham2589@gmail.com</p>
                </div>
            </Col>
        </StyledRow>
    );
};

export default HeadingContent;
