import React, { Fragment } from "react";
import { PageHeader, Typography } from "antd";

const { Paragraph } = Typography;

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

const content = (
  <Fragment>
    <Paragraph>Ant Design&#x27;s design team preferred</Paragraph>
    <p className="contentLink">
      <a>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          alt="start"
        />
        Quick Start
      </a>
      <a>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          alt="info"
        />
        Product Info
      </a>
      <a>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
          alt="doc"
        />
        Product Doc
      </a>
    </p>
  </Fragment>
);

const extraContent = (
  <img
    src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
    alt="content"
  />
);

export function HomePage() {
  return (
    <PageHeader title="Process definitions" breadcrumb={{ routes }}>
      <div className="wrap">
        <div className="content">{content}</div>
        <div className="extraContent">{extraContent}</div>
      </div>
    </PageHeader>
  );
}
