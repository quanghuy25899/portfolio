import React from 'react';

const Achievements = () => {
    return (
        <div className="section-margin">
            <p className="title">Achievements</p>
            <p>September 2018 - August 2020</p>
            <p> - Developed and maintaining three websites using HTML, CSS, Bootstrap, JavaScript and Php.</p>
            <p>
                <a
                    href="http://deepblue.cs.camosun.bc.ca/~ics057/ics111/lab04/PizzaPalace/index.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    Pizza Palace
                </a>
                <a
                    href="http://deepblue.cs.camosun.bc.ca/~ics057/ics111/lab05/index.html"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: 30 }}
                >
                    Tuk Tuk Heaven
                </a>
                <a
                    href="http://deepblue.cs.camosun.bc.ca/~ics057/199_final_project/customerpage/thinkfood.php"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: 30 }}
                >
                    Shopping List Application
                </a>
            </p>
            <p> - Took part in Global Game Jam 2019 and created a 2D game with another classmate using Unity and C#.</p>
            <p>
                <a href="https://github.com/quanghuy25899/GlobalGameJam" target="_blank" rel="noreferrer">
                    GitHub link
                </a>
            </p>
            <p>
                {' '}
                - Finished a game development course and created a 3D game with another classmate using Unity and C#.
            </p>
            <p>
                <a href="https://github.com/quanghuy25899/ICS223/tree/master/Pandemic" target="_blank" rel="noreferrer">
                    GitHub link
                </a>
            </p>
            <p>
                {' '}
                - As a front-end developer, took part in developing a web application for Camosun Innovates to manage
                videos.
            </p>
        </div>
    );
};

export default Achievements;
