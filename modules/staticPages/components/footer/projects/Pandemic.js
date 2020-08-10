import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Modal, Tooltip } from 'antd';

const { Meta } = Card;

const Pandemic = () => {
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
                title="Pandemic"
                style={{ width: 300 }}
                cover={<img alt="Pandemic" src="static/img/Pandemic1.png" />}
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
                <Meta description="A 3D game project on Unity written on C#" />
            </Card>
            <Modal visible={modalOpen} title="Pandemic" onCancel={handleModalClose} footer={null}>
                <p>
                    {`This is a 3D game project me and my friend made when we 
                    finished a Game Development course at Camosun. The game 
                    was inspirated by the COVID-19 pandemic in 2020. Player 
                    will roleplay a police officer going around the city 
                    and shoots facemasks to patients in order to cure them and 
                    prevent the virus from spreading to the community.`}
                </p>
                <img alt="Pandemic 1" src="static/img/Pandemic1.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img alt="Pandemic 2" src="static/img/Pandemic2.png" style={{ marginBottom: 20 }} />
            </Modal>
        </>
    );
};

export default Pandemic;
