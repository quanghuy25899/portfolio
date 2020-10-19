import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import PizzaPalace from './projects/PizzaPalace';
import TukTukHeaven from './projects/TukTukHeaven';
import Capstone from './projects/Capstone';
import GameJam from './projects/GameJam';
import Pandemic from './projects/Pandemic';

const StyledFooterWrapper = styled.div`
    margin-top: 70px;
`;

const FooterContent = () => {
    return (
        <StyledFooterWrapper>
            <div id="projects" className="title" style={{ marginBottom: 40 }}>
                Projects
            </div>
            <Row gutter={[100, 100]}>
                <Col xs={24} md={10} lg={8}>
                    <Capstone />
                </Col>
                <Col xs={24} md={10} lg={8}>
                    <PizzaPalace />
                </Col>
                <Col xs={24} md={10} lg={8}>
                    <TukTukHeaven />
                </Col>
                <Col xs={24} md={10} lg={8}>
                    <Pandemic />
                </Col>
                <Col xs={24} md={10} lg={8}>
                    <GameJam />
                </Col>
            </Row>
        </StyledFooterWrapper>
    );
};

export default FooterContent;
