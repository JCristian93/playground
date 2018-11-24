import React from 'react';
import PropTypes from 'prop-types';

const View = ({ style, children, ...other }) => {
    return (
      <div style={style} {...other}>{children}</div>
    )
}

export default Text;