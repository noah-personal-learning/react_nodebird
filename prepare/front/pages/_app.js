import React from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'
import wrapper from '../store/configureStore';

const NordBird = ({ Component }) => {
    return (
        <div>
            <Head>
                <meta charSet='UTF-8'/>
                <title>NordBird</title>
            </Head>
            <Component/>
        </div>
    );
};

NordBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NordBird);