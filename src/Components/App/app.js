import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "Components/Layout";
import "API/data";
import { SearchPage, BookDetailsPage, AddBookPage } from "Routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/book/add" component={AddBookPage} />
            <Route path="/category/:isbn" component={BookDetailsPage} />
            <Route path={["/search", "*"]}>
              <SearchPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
