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
    const stepsCompletedArr = [];
    const stepsNotCompleteArr = [];

    for (let i = 1; i <= stepsCompleted; i += 1) {
        stepsCompletedArr.push(<StyledProcessCompleted />);
    }

    for (let i = 1; i <= totalSteps - stepsCompleted; i += 1) {
        stepsNotCompleteArr.push(<StyledProcessNotComplete />);
    }

    return (
        <StyledProgress>
            {stepsCompletedArr.map(step => step)}
            {stepsNotCompleteArr.map(step => step)}
        </StyledProgress>
    );
};

export default ProgressBar;
