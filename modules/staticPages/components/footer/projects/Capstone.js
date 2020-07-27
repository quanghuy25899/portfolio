import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Modal } from 'antd';

const { Meta } = Card;

const Capstone = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOnClick = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Card
                title="Capstone Project"
                style={{ width: 300 }}
                cover={<img alt="Capstone Home" src="static/img/CapstoneHome.png" />}
                actions={[<EllipsisOutlined key="ellipsis" onClick={() => handleOnClick()} />]}
                headStyle={{ fontWeight: 'bold' }}
                hoverable
                bordered
            >
                <Meta description="A web application that uses for managing videos" />
            </Card>
            <Modal visible={modalOpen} title="Capstone Project" onCancel={handleModalClose} footer={null}>
                <p>
                    {`This is my capstone project, which me and 2 other 
                    classmates have just finished this August of 2020. 
                    This is, so far, my biggest and most professional 
                    project. In this project, I was responsible for all of 
                    the front-end tasks.`}
                </p>
                <p className="has-text-bold">Technologies used</p>
                <div>Front-end:</div>
                <div style={{ marginLeft: 30 }}>
                    - HTML <br />
                    - CSS <br />
                    - JavaScript <br />
                    - ReactJS <br />
                    - NextJS <br />
                    - AntDesign library <br />
                    - Bulma library <br />
                    - Axios library <br />
                </div>
                <div>Back-end:</div>
                <div style={{ marginLeft: 30 }}>
                    - TypeScript <br />
                    - NodeJS <br />
                </div>
                <div>Database:</div>
                <div style={{ marginLeft: 30 }}>- SQL database</div>
                {/* <a href="#" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
                    Checkout the website here.
                </a> */}
                <img alt="Capstone Home" src="static/img/CapstoneHome.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img alt="Capstone Playlists" src="static/img/CapstonePlaylists.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img
                    alt="Capstone Playlist Videos"
                    src="static/img/CapstonePlaylistVideos.png"
                    style={{ marginBottom: 20 }}
                />
                <div className="divider" />
                <img alt="Capstone Profile" src="static/img/CapstoneProfile.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img alt="Capstone Users" src="static/img/CapstoneUsers.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img
                    alt="Capstone Video Details"
                    src="static/img/CapstoneVideoDetails.png"
                    style={{ marginBottom: 20 }}
                />
            </Modal>
        </>
    );
};

export default Capstone;
