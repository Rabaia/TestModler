import React from "react";
import { Tree, Icon, Badge } from "antd";

const { TreeNode } = Tree;

export function ProcessTree() {
  return (
    <Tree
      // showLine
      showIcon
      // checkable
      defaultExpandAll
      // switcherIcon={<Icon type="down" />}
    >
      <TreeNode icon={<Icon type="branches" />} title="Mortgage loan" key="0-0">
        <TreeNode
          icon={<Icon type="setting" />}
          title="Applicant assessment"
          key="0-0-1"
        />
        <TreeNode
          icon={<Icon type="user" />}
          title="Applicant assessment"
          key="0-0-2"
        />
        <TreeNode
          icon={({ selected }) => <Icon type="table" />}
          title="Collateral assessment"
          key="0-0-3"
        />
        <TreeNode
          icon={<Icon type="branches" />}
          title="Collateral aseessment"
          key="0-0"
        >
          <TreeNode
            icon={<Icon type="setting" />}
            title={<>Calculation: Interest and fees</>}
            key="0-0-4"
          />
          <TreeNode
            icon={<Icon type="setting" />}
            title="Prepare offer"
            key="0-0-6"
          />
          <TreeNode
            icon={<Icon type="setting" />}
            title="Send offer"
            key="0-0-7"
          />
          <TreeNode
            icon={<Icon type="user" />}
            title="Decide on offer"
            key="0-0-8"
          />
          <TreeNode
            icon={<Icon type="loading" />}
            title="Collateral assessment"
            key="0-0-9"
          />
        </TreeNode>
      </TreeNode>
    </Tree>
  );
}
