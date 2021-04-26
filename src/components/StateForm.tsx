import React, { Fragment } from "react";
import _ from "lodash";
import { Form, Icon, Input, Radio, Tree } from "antd";
import JSONTree from "react-json-tree";
import Editor from "@monaco-editor/react";

const formatLabel = _.startCase;

const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 14 }
};

function Section({ name, children }) {
  const title = _.isString(name) ? (
    <Form.Item {...formItemLayout} label={formatLabel(name)} />
  ) : null;
  return (
    <Form layout="horizontal">
      {title}
      {children}
    </Form>
  );
}

const defaultState = {
  MainApplicant: {
    FirstName: "John",
    LastName: "Doe"
  },
  CoApplicants: [
    {
      FirstName: "John",
      LastName: "Doe"
    },
    {
      FirstName: "John",
      LastName: "Doe",
      TaxInformation: [
        { Year: "2019", Income: "230000 DKK", Nested: [{ Value: "Yes" }] }
      ]
    }
  ],
  OtherValue: "String"
};

function renderValue(value: any, name: string) {
  return (
    <Form.Item {...formItemLayout} label={formatLabel(name)} key={name}>
      <Input placeholder={value} />
    </Form.Item>
  );
}

function renderList(values: any, name: string) {
  return (
    <Section name={name}>
      {_.map(values, (value, index) => render(value, index))}
    </Section>
    // <Form.Item {...formItemLayout} label={formatLabel(name)} key={name}>

    // </Form.Item>
  );
}

function renderObject(obj: any, name?: string) {
  const content = _.map(obj, (value, attr) => render(value, attr));
  return (
    <Section name={name}>{content}</Section>
    // <Form.Item
    //   {...formItemLayout}
    //   label={_.isString(name) ? formatLabel(name) : null}
    //   key={name}
    // >
    //   {content}
    // </Form.Item>
  );
}

function render(item: any, name?: string) {
  if (_.isArray(item)) {
    return renderList(item, name);
  } else if (_.isObject(item)) {
    return renderObject(item, name);
  } else {
    return renderValue(item, name);
  }
}

export function StateForm<State>({ state = defaultState }) {
  // const content = _.map(state, (value, attr) => render(value, attr));
  // return (
  //   <Form.Item
  //     {...formItemLayout}
  //     label={_.isString(name) ? formatLabel(name) : null}
  //     key={name}
  //   >
  //     {content}
  //   </Form.Item>
  // );
  return (
    <Form layout="horizontal">
      {_.map(state, (value, attr) => render(value, attr))};
    </Form>
  );
}

function stateToTree(state) {
  const tree = {};
}

export function StateTree({ state = defaultState }) {
  const theme = {
    scheme: "google",
    author: "seth wright (http://sethawright.com)",
    base00: "#1d1f21",
    base01: "#282a2e",
    base02: "#373b41",
    base03: "#969896",
    base04: "#b4b7b4",
    base05: "#c5c8c6",
    base06: "#e0e0e0",
    base07: "#ffffff",
    base08: "#CC342B",
    base09: "#F96A38",
    base0A: "#FBA922",
    base0B: "#198844",
    base0C: "#3971ED",
    base0D: "#3971ED",
    base0E: "#A36AC7",
    base0F: "#3971ED"
  };

  return (
    <JSONTree
      data={state}
      theme={theme}
      invertTheme={true}
      shouldExpandNode={_.constant(true)}
    />
  );

  // return (
  //   <Tree showLine defaultExpandedKeys={["0-0-0"]}>
  //     <Tree.TreeNode title="parent 1" key="0-0">
  //       <Tree.TreeNode title="parent 1-0" key="0-0-0">
  //         <Tree.TreeNode title="leaf" key="0-0-0-0" />
  //         <Tree.TreeNode title="leaf" key="0-0-0-1" />
  //         <Tree.TreeNode title="leaf" key="0-0-0-2" />
  //       </Tree.TreeNode>
  //       <Tree.TreeNode title="parent 1-1" key="0-0-1">
  //         <Tree.TreeNode title="leaf" key="0-0-1-0" />
  //       </Tree.TreeNode>
  //       <Tree.TreeNode title="parent 1-2" key="0-0-2">
  //         <Tree.TreeNode title="leaf" key="0-0-2-0" />
  //         <Tree.TreeNode title="leaf" key="0-0-2-1" />
  //       </Tree.TreeNode>
  //     </Tree.TreeNode>
  //   </Tree>
  // );
}

export function StateEditor({ state = defaultState }) {
  return (
    <Editor
      height="60vh"
      language="json"
      value={JSON.stringify(state, null, 4)}
    />
  );
}
