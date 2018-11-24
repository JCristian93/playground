import React from 'react';
import { Menu, Dropdown, Icon, Input } from 'antd';

import Text from '../text';
import View from '../view';
import Logo from '../../../public/cat-pic.jpg'
import './header.css';

const Search = Input.Search;

const iconStyle = {
  fontSize: 30,
  color: 'var(--darkPink)'
}

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
  </Menu>
);

class UpperHeader extends React.PureComponent {
  render() {
    const { } = this.props;
    return (
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img src={Logo} width={160} height={100}/>
        <Search
          className="search__input"
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />
        <View style={{
          display: 'inline-flex',
          width: '30%',
        }}>
          <View style={{
            flex: 1,
          }}>
            <Icon type="user" style={iconStyle}/>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                <Text>Contul meu</Text> <Icon type="down" />
              </a>
            </Dropdown>
          </View>
          <View style={{
            flex: 1,
          }}>
            <Icon type="heart" theme="filled" style={iconStyle}  />
          </View>
          <View style={{
            flex: 1,
          }}>
            <Icon type="shopping-cart" style={iconStyle}/>
          </View>
        </View>
      </View>
    );
  }
}

export default UpperHeader;