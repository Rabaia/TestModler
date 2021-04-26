import React from "react";
import { PageHeader, Tag, Tabs, Button, Statistic, Row, Col, Icon } from "antd";

const { TabPane } = Tabs;

const Description = ({ term, children, span = 12 }) => (
  <Col span={span}>
    <div className="description">
      <div className="term">{term}</div>
      <div className="detail">{children}</div>
    </div>
  </Col>
);

const content = (
  <Row>
    <Description term="Created">2017-01-10 14:00</Description>
    <Description term="Elapsed">2 days</Description>
    <Description term="Version">
      <a>13.0.1</a>
    </Description>
    <Description term="Tenant">
      <a>Sparbank and Syd</a>
    </Description>
    {/* <Description term="Bank ID">2017-10-10</Description> */}
  </Row>
);

const extraContent = (
  <Row>
    <Col span={24}>
      <Statistic title="Status" value="Pending" />
    </Col>
  </Row>
);

export function ProcessHeader() {
  return (
    <PageHeader
      onBack={() => window.history.back()}
      title="Mortgage loan"
      subTitle="General process definition"
      tags={<Tag color="red">Warning</Tag>}
      extra={[
        <Button key="1">
          <Icon type="stop" />
          Cancel
        </Button>,
        <Button key="2" type="primary">
          <Icon type="pause-circle" />
          Pause
        </Button>,
        <Button key="3" type="primary">
          <Icon type="play-circle" />
          Resume
        </Button>
      ]}
      // footer={
      //   <Tabs defaultActiveKey="1">
      //     <TabPane tab="Details" key="1" />
      //     <TabPane tab="Rule" key="2" />
      //   </Tabs>
      // }
    >
      <div className="wrap">
        <div className="content padding">{content}</div>
        <div className="extraContent">{extraContent}</div>
      </div>
    </PageHeader>
  );
}
