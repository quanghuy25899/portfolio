import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Modal, Tooltip } from 'antd';

const { Meta } = Card;

const TukTukHeaven = () => {
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
                title="Tuk Tuk Heaven"
                style={{ width: 300 }}
                cover={<img alt="Tuk Tuk Heaven Home" src="static/img/TukTukHeavenHome.png" />}
                actions={[
                    <Tooltip placement="top" title="More details">
                        <EllipsisOutlined key="ellipsis" onClick={() => handleOnClick()} />
                    </Tooltip>
                ]}
                headStyle={{ fontWeight: 'bold' }}
                hoverable
                bordered
            >
                <Meta description="A small project to practice making single page website" />
            </Card>
            <Modal visible={modalOpen} title="Pizza Palace" onCancel={handleModalClose} footer={null}>
                <p>
                    {`This is also a small project I made after finished a 
                    Web Development course. This is a singple page website 
                    that was built on HTML, CSS, and Bootstrap. It represents an 
                    imagination store that sells tuk tuk. It doesn't have any 
                    back-end, it just simply displaying the products, price, 
                    and some informations`}
                </p>
                <a
                    href="http://deepblue.cs.camosun.bc.ca/~ics057/ics111/lab05/index.html"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'underline' }}
                >
                    Checkout the website here.
                </a>
                <img alt="Tuk Tuk Heaven Home" src="static/img/TukTukHeavenHome.png" style={{ marginBottom: 20 }} />
                <div className="divider" />
                <img
                    alt="Tuk Tuk Heaven Product"
                    src="static/img/TukTukHeavenProducts.png"
                    style={{ marginBottom: 20 }}
                />
            </Modal>
        </>
    );
};

export default TukTukHeaven;
