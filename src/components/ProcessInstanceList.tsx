import React from "react";
import { List, Avatar, Badge, Icon } from "antd";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Mortgage Loan",
    error: true
  },
  {
    title: "Mortgage Loan",
    paused: true
  },
  {
    title: "Mortgage Loan"
  },
  {
    title: "Mortgage Loan"
  },
  {
    title: "Mortgage Loan",
    paused: true
  },
  {
    title: "Mortgage Loan"
  },
  {
    title: "Mortgage Loan"
  },
  {
    title: "Mortgage Loan",
    error: true
  },
  {
    title: "Mortgage Loan",
    paused: true
  },
  {
    title: "Mortgage Loan"
  },
  {
    title: "Mortgage Loan"
  },
  {
    title: "Mortgage Loan",
    paused: true
  },
  {
    title: "Mortgage Loan"
  },
  {
    title: "Mortgage Loan"
  }
];

const errorIcon = (
  <Avatar style={{ backgroundColor: "#F5222D" }} icon="exclamation" />
);
const successIcon = (
  <Avatar style={{ backgroundColor: "#87d068" }} icon="check" />
);

const pausedIcon = (
  <Avatar style={{ backgroundColor: "orange" }} icon="pause" />
);

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const actions = [
  // <IconText type="user" text="Decide on loan approval" />,
  // <IconText type="setting" text="42" />,
  <IconText type="clock-circle" text="5/30/2019" />
];

export function ProcessInstanceList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item actions={actions}>
          <List.Item.Meta
            avatar={
              item.error ? errorIcon : item.paused ? pausedIcon : successIcon
            }
            title={<Link to={`/process/12`}>{item.title}</Link>}
            description="Sparebank & syd"
          />
        </List.Item>
      )}
    />
  );
}
