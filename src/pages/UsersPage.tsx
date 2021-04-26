import React from "react";
import { Row, Layout, Card, Col } from "antd";
import { UsersList } from "../components/UsersList";

const marginBottom = { marginBottom: "18px" };

export function UsersPage() {
  return (
    <Layout.Content style={{ padding: "12px" }}>
      <Row gutter={18}>
        <Col span={24} style={marginBottom}>
          <Card>
            <UsersList />
          </Card>
        </Col>
      </Row>
    </Layout.Content>
  );
}
