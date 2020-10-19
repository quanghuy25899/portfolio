import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Modal, Tooltip } from 'antd';

const { Meta } = Card;

const PizzaPalace = () => {
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
                title="Pizza Palace"
                style={{ width: 350 }}
                cover={<img alt="Pizza Palace Home" src="static/img/PizzaPalaceHome.png" />}
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
                <Meta description="A small project to get to know HTML, CSS, Bootstrap, and PHP" />
            </Card>
            <Modal visible={modalOpen} title="Pizza Palace" onCancel={handleModalClose} footer={null}>
                <p style={{ marginBottom: 20 }}>
                    {`This is a small project I made after finished a 
                    Web Development course at Camosun. It just a simple website 
                    that used HTML, CSS, Bootstrap, PHP, and Google Map plugin to 
                    represent a random pizza website that doesn't exist. The 
                    website's back-end is running on PHP and it could handle 
                    the pizza ordering process but you will never receive your 
                    pizza.`}
                </p>
                <img alt="Pizza Palace Home" src="static/img/PizzaPalaceHome.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img alt="Pizza Palace Menu" src="static/img/PizzaPalaceMenu.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img alt="Pizza Palace Order" src="static/img/PizzaPalaceOrder.png" style={{ marginBottom: 20 }} />
            </Modal>
        </>
    );
};

export default PizzaPalace;
