import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Modal, Tooltip } from 'antd';

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
                actions={[
                    <Tooltip placement="top" title="More details">
                        <EllipsisOutlined key="ellipsis" onClick={() => handleOnClick()} />
                    </Tooltip>
                ]}
                headStyle={{ fontWeight: 'bold' }}
                hoverable
                bordered
            >
                <Meta description="A web application that uses for managing videos" />
            </Card>
            <Modal visible={modalOpen} title="Capstone Project" onCancel={handleModalClose} footer={null}>
                <p>
                    {`This is my capstone project, which me and two other 
                    classmates have just finished this August of 2020. 
                    This is, so far, my biggest and most professional 
                    project. In this project, I was responsible for all of 
                    the front-end tasks.`}
                </p>
                {/* <a href="#" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
                    Checkout the website here.
                </a> */}
                <img alt="Capstone Home" src="static/img/CapstoneHome.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img
                    alt="Capstone Video Details"
                    src="static/img/CapstoneVideoDetails.png"
                    style={{ marginBottom: 20 }}
                />
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
            </Modal>
        </>
    );
};

export default Capstone;
