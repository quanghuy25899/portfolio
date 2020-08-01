import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import Social from './leftPart/Social';
import Bio from './leftPart/Bio';
import Skills from './leftPart/Skills';
import Languages from './leftPart/Languages';

import Profile from './rightPart/Profile';
import Education from './rightPart/Education';
import Internships from './rightPart/Internships';
import Achievements from './rightPart/Achievements';
import FutureGoals from './rightPart/FutureGoals';

const StyledBodyWrapper = styled.div`
    a:link {
        color: '4caf50';
        text-decoration: underline;
    }
    a:visited {
        color: '4caf50';
        text-decoration: underline;
    }
    a:hover {
        color: '4caf50';
        text-decoration: underline;
    }
    a:active {
        color: #bfbfbf;
        text-decoration: underline;
    }
`;

const BodyContent = () => {
    return (
        <StyledBodyWrapper>
            <Row gutter={[10, 30]} style={{ marginTop: 30 }}>
                <Col id="left-part" xs={24} md={5} lg={7}>
                    <Social />
                    <Bio />
                    <Skills />
                    <Languages />
                </Col>
                <Col id="right-part" xs={24} md={19} lg={17}>
                    <Profile />
                    <Education />
                    <Internships />
                    <Achievements />
                    <FutureGoals />
                </Col>
            </Row>
        </StyledBodyWrapper>
    );
};

export default BodyContent;
