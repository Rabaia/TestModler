import React from "react";
import { Empty } from "antd";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export function ProcessTabs() {
  return (
    <Tabs defaultActiveKey="2">
      <TabPane tab="Active" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Completed" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

export function ProcessList() {
  return <Empty />;
}
