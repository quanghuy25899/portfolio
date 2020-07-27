import React from 'react';

import { ProgressBar } from 'modules/core/components';

const Languages = () => {
    return (
        <div style={{ marginTop: 30 }}>
            <p className="has-text-bold">Languages</p>
            <p>Vietnamese</p>
            <ProgressBar stepsCompleted={5} totalSteps={5} />
            <p>English</p>
            <ProgressBar stepsCompleted={4} totalSteps={5} />
        </div>
    );
};

export default Languages;
