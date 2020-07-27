/* eslint-disable import/no-webpack-loader-syntax */
import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import lessToJs from 'less-vars-to-js';
import camelcaseKeys from 'camelcase-keys';

import 'bulma/bulma.sass'; // bulma
import '../styles/app.less'; // others

// eslint-disable-next-line import/no-unresolved
const themeLess = require('!!raw-loader!../styles/antd-theme.less');

let theme = lessToJs(themeLess, { resolveVariables: true, stripPrefix: true });
theme = camelcaseKeys(theme);

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        const { req, reduxStore } = ctx;

        return { pageProps };
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props;

        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Container>
        );
    }
}

export default MyApp;
