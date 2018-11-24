import React from 'react';
import UpperHeader from './upper-header';
import LowerHeader from './lower-header';
import View from '../view';

class Header extends React.PureComponent {
  render() {
    const { } = this.props;
    return (
      <View>
        <UpperHeader />
        <LowerHeader />
      </View>
    )
  }
}

export default Header