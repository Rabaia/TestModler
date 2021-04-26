import React from "react";
import { WrappedLoginForm } from "../components/LoginForm";
import { Logo } from "../components/Logo";
import { Card } from "antd";

export function LoginPage() {
  return (
    <div className="LoginPage">
      <Card title={<Logo style={{ height: "20px" }} />} bordered={false}>
        <WrappedLoginForm />
      </Card>
    </div>
  );
}
