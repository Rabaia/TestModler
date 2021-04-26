import React from "react";
import { Icon, List, Avatar, Button, Popconfirm, Popover } from "antd";
import { BpmnPreview } from "./BpmnPreview";
import { Link } from "react-router-dom";

const errorIcon = (
  <Avatar style={{ backgroundColor: "#f0f2f5" }} icon="exclamation" />
);
const successIcon = (
  <Avatar style={{ backgroundColor: "#f0f2f5" }} icon="check" />
);

const pausedIcon = (
  <Avatar style={{ backgroundColor: "#f0f2f5" }} icon="pause" />
);

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export function DefinitionList(props) {
  const data = props.definitions ? props.definitions : [];
  const actions = [
    <IconText type="fork" text="156" />,
    <IconText type="check" text="42" />,
    <IconText type="warning" text="13" />,

    <Button icon="pause" type="default" block>
      disable
    </Button>,
    <Popconfirm
      title="Are you sure delete this task?"
      onConfirm={null}
      onCancel={null}
      okText="Yes"
      cancelText="No"
    >
      <Button icon="delete" type="danger" block>
        delete
      </Button>
    </Popconfirm>
  ];

  return (
    <List
      {...props}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item actions={actions}>
          <List.Item.Meta
            avatar={
              item.error ? errorIcon : item.paused ? pausedIcon : successIcon
            }
            title={
              <Popover
                placement="left"
                content={
                  <BpmnPreview
                    xml={item.xml}
                    style={{ height: 200, width: 800 }}
                  />
                }
              >
                <Link to={`/process?definition=${item.id}`}>{item.name}</Link>
              </Popover>
            }
            description="Sparbanken Syd"
          />
        </List.Item>
      )}
    />
  );
}
