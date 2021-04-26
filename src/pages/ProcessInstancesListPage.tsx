import React from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Form,
  Select,
  Input,
  DatePicker,
  Tabs
} from "antd";
import { ProcessInstanceList } from "../components/ProcessInstanceList";
import { InstancesList } from "../components/InstancesList";

const marginBottom = {
  marginBottom: "24px"
};

export function ProcessInstancesListPage() {
  return (
    <Layout.Content style={{ padding: "12px" }}>
      <Row gutter={18}>
        <Col span={24} style={marginBottom}>
          <Card>
            <h3>Process instances</h3>
            <div>
              <Form layout="inline">
                <Form.Item>
                  <Select placeholder="Select tenant" style={{ width: 200 }}>
                    <Select.Option value="Option1">
                      Sparebank & syd
                    </Select.Option>
                    <Select.Option value="Option2">Avida Finland</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Select
                    placeholder="Select definition"
                    style={{ width: 200 }}
                  >
                    <Select.Option value="Option1">
                      Process Defintion
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Input.Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                  />
                </Form.Item>
                <Form.Item>
                  <DatePicker.RangePicker />
                </Form.Item>
              </Form>
            </div>
            <Tabs defaultActiveKey="2">
              <Tabs.TabPane tab="Active" key="2">
                <InstancesList />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Completed" key="3">
                <ProcessInstanceList />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Cancelled" key="4">
                <ProcessInstanceList />
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Layout.Content>
  );
}
