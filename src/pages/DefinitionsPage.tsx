import React, { Fragment } from "react";
import { Layout, Row, Col, Card, Typography, PageHeader } from "antd";
import { DefinitionList } from "../components/DefinitionList";
import { DefinitionGrid } from "../components/DefinitionGrid";
import { DefinitionUpload } from "../components/DefinitionUpload";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const marginBottom = {
  marginBottom: "24px"
};

const links = [
  {
    icon: (
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        alt="doc"
      />
    ),
    text: "Process instances",
    url: "/process"
  }
];

const content = (
  <Fragment>
    <Typography.Paragraph>
      Explore deployed process Definitions
    </Typography.Paragraph>
    <p className="contentLink">
      {links.map(link => (
        <Link to={link.url}>
          {link.icon}
          {link.text}
        </Link>
      ))}
    </p>
  </Fragment>
);

const extraContent = (
  <img
    src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
    alt="content"
  />
);

const routes = [
  {
    path: "index",
    breadcrumbName: "Process"
  },
  {
    path: "first",
    breadcrumbName: "Definitions"
  }
];

export function DefinitionsPage() {
  // const { loading, error, data } = useQuery(gql`
  //   {
  //     definitions {
  //       id
  //       name
  //       xml: bpmnDefinition
  //     }
  //   }
  // `);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  const data  = {definitions: []}

  return (
    <Fragment>
      <PageHeader
        title="Process definitions"
        breadcrumb={{ routes }}
        style={marginBottom}
      >
        <div className="wrap">
          <div className="content">{content}</div>
          <div className="extraContent">{extraContent}</div>
        </div>
      </PageHeader>
      <Layout.Content style={{ padding: "12px" }}>
        <Row gutter={18}>
          <Col span={16}>
            <Card
              title={"Recent definitions"}
              bodyStyle={{ padding: 0 }}
              bordered={false}
              style={marginBottom}
            >
              <DefinitionGrid definitions={data.definitions} />
            </Card>
            <Card title={"Process definitions"} style={marginBottom}>
              <DefinitionList definitions={data.definitions} />
            </Card>
          </Col>
          <Col span={8} style={marginBottom}>
            <Card title="Upload process definition">
              <DefinitionUpload />
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </Fragment>
  );
}
