import React from 'react';

const Internships = () => {
    return (
        <div id="internships" className="section-margin">
            <p className="title">Internships</p>
            <p className="has-text-bold">Volunteer at GetSmart Solutions Inc, Victoria, BC, Canada</p>
            <p>
                August 2019 - September 2019
                <br />
                Developed an automate testing tool written in Java to fasten their unit testing process.
                <br />
                Technologies used:
                <div style={{ marginLeft: 30 }}>
                    <b>Java: </b> the programming language the tool was written on.
                    <br />
                    <b>Selenium WebDriver: </b> for automatically access web&apos;s element and perform actions.
                    <br />
                    <b>POI Apache: </b> for automatically read data from excel file then write to any field on the
                    website that needs informations.
                </div>
                <a
                    href="https://github.com/quanghuy25899/Java-Programming/tree/master/WebTest"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub link
                </a>
            </p>
        </div>
    );
};

export default Internships;
