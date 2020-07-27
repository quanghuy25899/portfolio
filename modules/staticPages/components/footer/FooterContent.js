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

const StyledColumn = styled(Col)`
    margin-bottom: 100px;
`;

const FooterContent = () => {
    return (
        <StyledFooterWrapper>
            <div id="projects" className="title" style={{ marginBottom: 40 }}>
                Projects
            </div>
            <Row gutter={10}>
                <StyledColumn xs={24} md={10} lg={8}>
                    <Capstone />
                </StyledColumn>
                <StyledColumn xs={24} md={10} lg={8}>
                    <PizzaPalace />
                </StyledColumn>
                <StyledColumn xs={24} md={10} lg={8}>
                    <TukTukHeaven />
                </StyledColumn>
                <StyledColumn xs={24} md={10} lg={8}>
                    <Pandemic />
                </StyledColumn>
                <StyledColumn xs={24} md={10} lg={8}>
                    <GameJam />
                </StyledColumn>
            </Row>
        </StyledFooterWrapper>
    );
};

export default FooterContent;
