import React from 'react';

import { ProgressBar } from 'modules/core/components';

const Skills = () => {
    return (
        <div id="skills" style={{ marginTop: 30 }}>
            <p className="has-text-bold">Skills</p>
            <p>Front-end Web Development</p>
            <ProgressBar stepsCompleted={3} totalSteps={5} />
            <br />
            <p>JavaScript</p>
            <ProgressBar stepsCompleted={3} totalSteps={5} />
            <br />
            <p>ReactJS / NextJS</p>
            <ProgressBar stepsCompleted={3} totalSteps={5} />
            <br />
            <p>VueJS / NuxtJS</p>
            <ProgressBar stepsCompleted={2} totalSteps={5} />
            <br />
            <p>Python</p>
            <ProgressBar stepsCompleted={3} totalSteps={5} />
            <br />
            <p>Java</p>
            <ProgressBar stepsCompleted={3} totalSteps={5} />
        </div>
    );
};

export default Skills;
