import React from 'react';
import { Table } from 'antd';

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
            backEnd: [
                <div>
                    - Open API
                    <br />- Vimeo Developer API
                    <br />- Vimeo SDK for Node.JS
                </div>
            ],
            database: 'None'
        },
        {
            key: '3',
            sections: 'Source-code editor and other tools',
            frontEnd: [
                <div>
                    - Visual Studio Code
                    <br />- Postman API client
                </div>
            ],
            backEnd: [
                <div>
                    - Vim
                    <br />- Postman API client
                </div>
            ],
            database: [
                <div>
                    - MySQL Developer
                    <br />- Visual Studio Code
                </div>
            ]
        }
    ];

    return (
        <div id="achievements" className="section-margin">
            <p className="title">Achievements</p>
            <p><b>September 2018 - August 2020</b></p>

            <p>
                - Deleveloped and maintaining a Wordpress website and a website built with Next.js for a local restaurant.
                <br />
                <b style={{ marginLeft: 30 }}>WordPress:</b> <a href="https://alysapho.wordpress.com/" target="_blank" rel="noreferrer">
                    Alysa&apos;s pho & banh my
                </a>
                <br />
                <b style={{ marginLeft: 30 }}>Next.js:</b> <a href="https://alysapho.ca/" target="_blank" rel="noreferrer">
                    Alysa&apos;s pho & banh my
                </a>
            </p>

            <p>
                - Developed a web application for Camosun Innovates to manage videos. It was my Capstone project at
                Camosun College. I was in a team of three people and I was responsible for the front-end development of
                the application.
                <br />
                <a
                    href="https://portal.witnessblanket.ca/login"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: 30 }}
                >
                    Capstone project
                </a>
                <br />
                Technologies used:
                <Table columns={columns} dataSource={data} pagination={false} style={{ marginTop: 10 }} />
            </p>
        </div>
    );
};

export default Achievements;
