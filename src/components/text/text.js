import React from 'react';
import styling from './text-styling';

const Text = (props) => {
    const styles = styling();
    return (
      <span {...styles} >{props.children}</span>
    )
}

export default Text;