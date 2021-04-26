import React from "react";
import { Layout } from "antd";
import { MainMenu } from "./MainMenu";

export function ProcessManagerLayout(props) {
  return (
    <Layout>
      <Layout.Header style={{ height: "auto", padding: 0 }}>
        <MainMenu />
      </Layout.Header>
      {props.children}
    </Layout>
  );
}
