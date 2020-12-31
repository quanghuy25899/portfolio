import React from 'react';
import { Table, Divider } from 'antd';

import { CAMOSUN_COLUMNS, CAMOSUN_DATA, CARRO_COLUMNS, CARRO_DATA } from '../../../../constants';

const Experiences = () => {
    return (
        <div id="experiences" className="section-margin">
            <p className="title">Experiences</p>

            <div id="carro">
                <p>
                    <div>
                        <b>Front End Web Developer - Contract full-time</b>
                    </div>
                    <div>
                        <b>CARRO</b>
                    </div>
                    <div>September 2020 - Present</div>
                </p>

                <p>
                    <p>
                        <div>Project: Carro Web Appilication</div>
                        <div>Project Description: Develop and maintain web applications for Carro.</div>
                        <div>Team size: 10 people</div>
                    </p>

                    <p>
                        <div>Responsibilities:</div>
                        <div>
                            - Work with designers and back-end programmers in order to bring the best quality and user
                            experience for every application.
                        </div>
                        <div>- Build reusable code and libraries for long term maintenance and future reuse.</div>
                        <div>- Testing, fixing bugs, and verifying website's quality, and performance.</div>
                    </p>

                    <p>
                        Technologies Used:
                        <Table
                            columns={CARRO_COLUMNS}
                            dataSource={CARRO_DATA}
                            pagination={false}
                            style={{ marginTop: 10 }}
                        />
                    </p>
                </p>
            </div>

            <Divider />

            <div id="camosun-innovates">
                <p>
                    <div>
                        <b>Front End Web Developer - Contract full-time</b>
                    </div>
                    <div>
                        <b>Camosun Innovates</b>
                    </div>
                    <div>September 2018 - August 2020</div>
                </p>

                <div>
                    <p>
                        In a team of three people, we developed a React web application for Witness Blanket to manage
                        their video library. The application has features that support organizing videos from Witness
                        Blanket's Vimeo account such as create playlist, create tag, add tags to videos, search for tags
                        throughout the whole system, set video's publicity, etc.
                    </p>

                    <p>
                        <div>Responsibilities:</div>
                        <div>
                            - Work with back-end programmers in order to bring the best quality and user experience for
                            every application.
                        </div>
                        <div>- Design and develop the UX&UI of the application.</div>
                        <div>- Testing and verifying website's security, quality, and performance.</div>
                    </p>

                    <p>
                        Technologies used:
                        <Table
                            columns={CAMOSUN_COLUMNS}
                            dataSource={CAMOSUN_DATA}
                            pagination={false}
                            style={{ marginTop: 10 }}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
