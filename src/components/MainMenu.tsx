import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

export function MainMenu() {
  return (
    <Menu defaultSelectedKeys={["1"]} mode="horizontal" theme="dark">
      <Menu.Item key="1">
        <Link to="/definitions">
          <Icon type="pull-request" />
          <span>Processes</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/">
          <Icon type="schedule" />
          <span>Tasks</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="desktop" />
        <span>Monitoring</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/debug">
          <Icon type="code" />
          <span>Debug</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/users">
          <Icon type="team" />
          <span>Users</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
}
