import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Modal, Tooltip } from 'antd';

const { Meta } = Card;

const GameJam = () => {
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
                title="Global GameJam 2019"
                style={{ width: 350 }}
                cover={<img alt="Game Jam 2019" src="static/img/GameJam2.png" />}
                actions={[
                    <Tooltip placement="top" title="More details">
                        <EllipsisOutlined key="ellipsis" onClick={() => handleOnClick()} />
                    </Tooltip>
                ]}
                onClick={() => handleOnClick()}
                headStyle={{ fontWeight: 'bold' }}
                hoverable
                bordered
            >
                <Meta description="A small 2D game project on Unity written on C#" />
            </Card>
            <Modal visible={modalOpen} title="Global GameJam 2019" onCancel={handleModalClose} footer={null}>
                <p>
                    {`This is a 2D game project me and my friend made while 
                    taking part in the Global Game Jam 2019 event. The game 
                    was about a dog got lost and had to find his way to home.`}
                </p>
                <img alt="Game Jam 1" src="static/img/GameJam1.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img alt="Game Jam 2" src="static/img/GameJam2.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img alt="Game Jam 3r" src="static/img/GameJam3.png" style={{ marginBottom: 20 }} />
            </Modal>
        </>
    );
};

export default GameJam;
