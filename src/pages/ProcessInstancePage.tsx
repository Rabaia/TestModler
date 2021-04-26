import React from "react";
import { Layout, Row, Col, Card, Tabs } from "antd";

import { BpmnPreview } from "../components/BpmnPreview";
import { StateForm, StateTree, StateEditor } from "../components/StateForm";
import { ProcessHistory } from "../components/ProcessHistory";
import { ProcessHeader } from "../components/ProcessHeader";
import { ProcessTree } from "../components/ProcessTree";

const marginBottom = { marginBottom: "18px" };

const bpmnXml = require("./../../public/bpmn/initial.bpmn");

export function ProcessInstancePage({}) {
  return (
    <Layout.Content style={{ padding: "12px" }}>
      <Row gutter={18}>
        <Col span={24} style={marginBottom}>
          <ProcessHeader />
        </Col>
        {bpmnXml ? (
          <Col span={24} style={marginBottom}>
            <Card>
              <BpmnPreview xml={bpmnXml} style={{ height: 400 }} />
            </Card>
          </Col>
        ) : null}
        <Col span={8}>
          <Card style={marginBottom}>
            <h3>Process history</h3>
            <ProcessHistory />
          </Card>
          <Card>
            <ProcessTree />
          </Card>
        </Col>
        <Col span={16} style={marginBottom}>
          <Card>
            <Tabs defaultActiveKey="4">
              <Tabs.TabPane tab="Form" key="2">
                <StateForm />
              </Tabs.TabPane>
              <Tabs.TabPane tab="JSON" key="3">
                <StateTree />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Raw" key="4">
                <StateEditor />
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Layout.Content>
  );
}
