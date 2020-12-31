export const CAMOSUN_COLUMNS = [
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

export const CAMOSUN_DATA = [
    {
        key: '1',
        sections: 'Programming languages and frameworks',
        frontEnd: [
            <div>
                <div>- JavaScript</div>
                <div>- Next.JS React</div>
            </div>
        ],
        backEnd: [
            <div>
                <div>- TypeScript</div>
                <div>- Node.JS</div>
                <div>- Express.JS</div>
            </div>
        ],
        database: [
            <div>
                <div>- TypeScript</div>
                <div>- MySQL queries</div>
            </div>
        ]
    },
    {
        key: '2',
        sections: 'Libraries',
        frontEnd: [
            <div>
                <div>- Ant Design</div>
                <div>- Bulma</div>
                <div>- React Redux</div>
            </div>
        ],
        backEnd: [
            <div>
                <div>- Open API</div>
                <div>- Vimeo Developer API</div>
                <div>- Vimeo SDK for Node.JS</div>
            </div>
        ],
        database: 'None'
    },
    {
        key: '3',
        sections: 'Source-code editor and other tools',
        frontEnd: [
            <div>
                <div>- Visual Studio Code</div>
                <div>- Postman API client</div>
            </div>
        ],
        backEnd: [
            <div>
                <div>- Vim</div>
                <div>- Postman API client</div>
            </div>
        ],
        database: [
            <div>
                <div>- MySQL Developer</div>
                <div>- Visual Studio Code</div>
            </div>
        ]
    }
];

export const CARRO_COLUMNS = [
    {
        title: 'Software environment',
        dataIndex: 'environment',
        key: 'environment'
    },
    {
        title: 'Development and Communication tools',
        dataIndex: 'development',
        key: 'development'
    },
    {
        title: 'Programming Languages',
        dataIndex: 'languages',
        key: 'languages'
    },
    {
        title: 'Programming Frameworks',
        dataIndex: 'frameworks',
        key: 'frameworks'
    }
];

export const CARRO_DATA = [
    {
        key: '1',
        environment: [
            <div>
                <div>- Mac OS, Windows 10, Node.JS, MySQL, AWS</div>
            </div>
        ],
        development: [
            <div>
                <div>- Visual Studio Code</div>
                <div>- Postman</div>
                <div>- Sequel Pro</div>
                <div>- Notion, Slack, Lark, Zoho Mail</div>
                <div>- Github, Sourcetree</div>
            </div>
        ],
        languages: [
            <div>
                <div>- JavaScript</div>
                <div>- HTML</div>
                <div>- CSS</div>
            </div>
        ],
        frameworks: [
            <div>
                <div>- Next.JS React</div>
                <div>- React Redux</div>
                <div>- Bulma CSS</div>
                <div>- Ant Design Library</div>
                <div>- PHP Laravel</div>
            </div>
        ]
    }
];
