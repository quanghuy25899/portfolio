import React from 'react';
import { Table, Tag, Space } from 'antd';

const Achievements = () => {
    const columns = [
        {
            title: '',
            dataIndex: 'sections',
            key: 'sections'
        },
        {
            title: 'Front-end',
            dataIndex: 'frontEnd',
            key: 'frontEnd'
        },
        {
            title: 'Back-end',
            dataIndex: 'backEnd',
            key: 'backEnd'
        },
        {
            title: 'Database',
            dataIndex: 'database',
            key: 'database'
        }
    ];

    const data = [
        {
            key: '1',
            sections: 'Programming languages and frameworks',
            frontEnd: [
                <div>
                    - JavaScript
                    <br />- React.JS
                    <br />- Next.JS
                </div>
            ],
            backEnd: [
                <div>
                    - TypeScript
                    <br />- Node.JS
                    <br />- Express.JS
                </div>
            ],
            database: [
                <div>
                    - TypeScript
                    <br />- MySQL queries
                </div>
            ]
        },
        {
            key: '2',
            sections: 'Libraries',
            frontEnd: [
                <div>
                    - AntDesign
                    <br />- Bulma
                    <br />- React Redux
                </div>
            ],
            backEnd: [],
            databasse: []
        },
        {
            key: '3',
            sections: 'Source-code editor',
            frontEnd: 'Visual Studio Code',
            backEnd: [],
            database: 'MySQL Developer'
        }
    ];

    return (
        <div id="achievements" className="section-margin">
            <p className="title">Achievements</p>
            <p>September 2018 - August 2020</p>

            <p>
                {' '}
                - Developed and maintaining three websites using HTML, CSS, Bootstrap, JavaScript and Php.
                <br />
                <a
                    href="http://deepblue.cs.camosun.bc.ca/~ics057/ics111/lab04/PizzaPalace/index.html"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: 30 }}
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

            <p>
                {' '}
                - Took part in Global Game Jam 2019 and created a 2D game with another classmate using Unity and C#.
                <br />
                <a
                    href="https://github.com/quanghuy25899/GlobalGameJam"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: 30 }}
                >
                    GitHub link
                </a>
            </p>

            <p>
                {' '}
                - Finished a game development course and created a 3D game with another classmate using Unity and C#.
                <br />
                <a
                    href="https://github.com/quanghuy25899/ICS223/tree/master/Pandemic"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: 30 }}
                >
                    GitHub link
                </a>
            </p>

            <p>
                {' '}
                - Maintaining a Wordpress website for a local restaurant.
                <br />
                <a href="http://phovictoria.com/" target="_blank" rel="noreferrer" style={{ marginLeft: 30 }}>
                    Alysa&apos;s pho & banh my
                </a>
            </p>

            <p>
                {' '}
                - Developed another e-portfolio using Nuxt.JS
                <br />
                <a href="https://brianpham.herokuapp.com" target="_blank" rel="noreferrer" style={{ marginLeft: 30 }}>
                    E-portfolio
                </a>
            </p>

            <p>
                {' '}
                - Developed a web application for Camosun Innovates to manage videos. It was my Capstone project at
                Camosun College. I was in a team of three people and I was responsible for the front-end development of
                the application.
                <br />
                Technologies used:
                <Table columns={columns} dataSource={data} pagination={false} style={{ marginTop: 10 }} />
            </p>
        </div>
    );
};

export default Achievements;
