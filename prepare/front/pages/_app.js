import React from 'react'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types';

const NordBird = ({ Component }) => {
    return (
        <Component/>
    );
};

NordBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
};

export default NordBird;