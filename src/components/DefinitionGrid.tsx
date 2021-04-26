import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BpmnPreview } from "./BpmnPreview";
import { Row, Col, Card, Avatar } from "antd";

const errorIcon = (
  <Avatar style={{ backgroundColor: "#f0f2f5" }} icon="exclamation" />
);
const successIcon = (
  <Avatar style={{ backgroundColor: "#f0f2f5" }} icon="check" />
);

const pausedIcon = (
  <Avatar style={{ backgroundColor: "#f0f2f5" }} icon="pause" />
);

export function DefinitionGrid(props) {
  return (
    <div className="definition-grid">
      <Row>
        {props.definitions.map(definition => (
          <Col sm={24} md={12} lg={8} key={definition.id}>
            <Link to={`/process?definition=${definition.id}`}>
              <Card bordered={false} hoverable>
                <BpmnPreview xml={definition.xml} />
                <Card.Meta
                  avatar={successIcon}
                  title={definition.name}
                  description={
                    <>
                      <span>Sparebanken Syd</span>
                      <span style={{ float: "right" }}>2 days ago</span>
                    </>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
