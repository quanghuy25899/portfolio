import React from 'react';
import { Row, Col, Menu } from 'antd';
import Link from 'next/link';

const Header = () => {
    return (
        <Row gutter={10}>
            <Col xs={6} md={11} xl={24}>
                <Menu mode="horizontal">
                    <Menu.Item key="1">
                        <Link href="#profile">Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href="#education">Education</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link href="#internships">Internships</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link href="#achievements">Achievements</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link href="#projects">Projects</Link>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
};

export default Header;
