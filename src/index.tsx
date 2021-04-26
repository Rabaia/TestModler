import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles.scss";

import { HomePage } from "./pages/HomePage";
import { DebugPage } from "./pages/DebugPage";
import { ProcessInstancesListPage } from "./pages/ProcessInstancesListPage";
import { DefinitionsPage } from "./pages/DefinitionsPage";
import { ProcessInstancePage } from "./pages/ProcessInstancePage";
import { ProcessManagerLayout } from "./components/ProcessManagerLayout";
import { LoginPage } from "./pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import ApolloClient, { gql, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://flowengineserver.azurewebsites.net/graphql"
});

client
  .query({
    query: gql`
      {
        definitions {
          name
        }
      }
    `
  })
  .then(result => console.log(result));

// import TopNavHeader from "@ant-design/pro-layout";

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route
              path="/"
              component={() => (
                <ProcessManagerLayout>
                  <Switch>
                    <Route path="/debug" component={DebugPage} />
                    <Route path="/users" component={UsersPage} />
                    <Route
                      path="/process/:id"
                      component={ProcessInstancePage}
                      exact
                    />
                    <Route
                      path="/process"
                      component={ProcessInstancesListPage}
                      exact
                    />
                    <Route
                      path="/definitions"
                      component={DefinitionsPage}
                      exact
                    />
                    <Route path="" component={HomePage} />
                  </Switch>
                </ProcessManagerLayout>
              )}
            />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
