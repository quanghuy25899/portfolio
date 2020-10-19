import React, { useEffect } from 'react';
import { Row, Col, Menu } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const StyledRow = styled(Row)`
    position: fixed;
    height: 60px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    transition: top 0.5s;
`;

let previousScrollPos = typeof window !== 'undefined' ? window.pageYOffset : null;

const Header = () => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (previousScrollPos > currentScrollPos) {
            document.getElementById('top-nav').style.top = '0';
        } else {
            document.getElementById('top-nav').style.top = '-60px';
        }
        previousScrollPos = currentScrollPos;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return (() => {
            window.removeEventListener('scroll', handleScroll);
        });
    }, []);

    return (
        <StyledRow gutter={10} id="top-nav">
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
        </StyledRow>
    );
};

export default Header;
