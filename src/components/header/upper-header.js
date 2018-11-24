import React from 'react';
import { Menu, Icon } from 'antd';
import Text from '../text';
import View from '../view';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class UpperHeader extends React.PureComponent {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <View>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[ this.state.current ]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Icon type="home" /><Text>Home</Text>
          </Menu.Item>
          <Menu.Item key="">
            <Icon type="appstore" /><Text>Navigation Two</Text>
          </Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
          </Menu.Item>
        </Menu>
      </View>
    );
  }
}

export default UpperHeader;