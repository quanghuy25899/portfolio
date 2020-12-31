import React from 'react';
import { Row, Col } from 'antd';

import Social from './leftPart/Social';
import Bio from './leftPart/Bio';
import Skills from './leftPart/Skills';
import Languages from './leftPart/Languages';

import Profile from './rightPart/Profile';
import Education from './rightPart/Education';
import Internships from './rightPart/Internships';
import Experiences from './rightPart/Experiences';
import FutureGoals from './rightPart/FutureGoals';

const BodyContent = () => {
    return (
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
                <Experiences />
                <FutureGoals />
            </Col>
        </Row>
    );
};

export default BodyContent;
