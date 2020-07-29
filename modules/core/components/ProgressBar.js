import React from 'react';
import styled from 'styled-components';

const StyledProgress = styled.div`
    display: flex;
    height: 7px;
`;

const StyledProcessCompleted = styled.div`
    border-radius: 25px;
    width: 40px;
    margin-right: 5px;
    background-color: #000000;
`;

const StyledProcessNotComplete = styled.div`
    border-radius: 25px;
    width: 40px;
    margin-right: 5px;
    background-color: #bfbfbf;
`;

const ProgressBar = ({ stepsCompleted, totalSteps }) => {
    const stepsArr = [];

    for (let i = 1; i <= stepsCompleted; i += 1) {
        stepsArr.push(<StyledProcessCompleted />);
    }

    for (let i = 1; i <= totalSteps - stepsCompleted; i += 1) {
        stepsArr.push(<StyledProcessNotComplete />);
    }

    return <StyledProgress>{stepsArr.map(step => step)}</StyledProgress>;
};

export default ProgressBar;
