import React from 'react';
import { Row, Col, Menu } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
    return (
        <Row gutter={10}>
            <Col xs={6} md={11} xl={24}>
                <Menu mode="horizontal">
                    <Menu.Item key="1">
                        <Link href="#">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href="#">Skills</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link href="#">Education</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link href="#">Projects</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link href="#">Profile</Link>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
};

export default Header;
