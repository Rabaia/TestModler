import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Layout, Row, Col, Card, Tabs } from "antd";

function LogViewer() {
  const editor = useRef();
  const [height, setHeight] = useState("100vh");
  useEffect(() => {
    const { top } = (editor.current as HTMLElement).getBoundingClientRect();
    setHeight(`calc(100vh - ${top + 50}px)`);
  }, [height]);

  return (
    <div ref={editor}>
      <Editor height={height} language="json" value="..some log" />
    </div>
  );
}
export function DebugPage() {
  return (
    <Layout.Content style={{ padding: "12px" }}>
      <Row gutter={18}>
        <Col span={24}>
          <Card
            title="Deubg console
          "
          >
            <Tabs defaultActiveKey="3">
              <Tabs.TabPane tab="Access log" key="2" />
              <Tabs.TabPane tab="Error log" key="3">
                {/* <LogViewer /> */}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Raw" key="4">
                {/* <LogViewer /> */}
              </Tabs.TabPane>
            </Tabs>
            <LogViewer />
          </Card>
        </Col>
      </Row>
    </Layout.Content>
  );
}
