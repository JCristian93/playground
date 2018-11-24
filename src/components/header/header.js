import React from 'react';
import UpperHeader from './upper-header';
import LowerHeader from './lower-header';
import View from '../view';

class Header extends React.PureComponent {
  render() {
    const { } = this.props;
    return (
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '100px',
        paddingRight: '100px',
      }}
        className="header__container"
      >
        <UpperHeader />
        <LowerHeader />
      </View>
    )
  }
}

export default Header