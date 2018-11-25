import React from 'react';
import UpperHeader from './upper-header';
import LowerHeader from './lower-header';
import View from '@components/view';

class Header extends React.PureComponent {
  render() {
    const { } = this.props;
    return (
      <View style={{
        display: 'flex',
        flexDirection: 'column',
      }}
        className="header__container root__layout"
      >
        <UpperHeader />
        <LowerHeader />
      </View>
    )
  }
}

export default Header