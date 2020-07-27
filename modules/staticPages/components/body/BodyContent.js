import React from 'react';
import styled from 'styled-components';

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
    display: flex;

    a:link {
        color: black;
        text-decoration: underline;
    }
    a:visited {
        color: black;
        text-decoration: underline;
    }
    a:hover {
        color: black;
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
            <div id="left-part" style={{ marginTop: 30 }}>
                <Social id="social" />
                <Bio id="bio" />
                <Skills id="skills" />
                <Languages id="languages" />
            </div>
            <div id="right-part" style={{ marginLeft: 60, marginTop: 30 }}>
                <Profile id="profile" />
                <Education id="education" />
                <Internships id="internships" />
                <Achievements id="achievements" />
                <FutureGoals id="future-goals" />
            </div>
        </StyledBodyWrapper>
    );
};

export default BodyContent;
