import React, { Component } from "react";
import Layout from "Components/Layout";
import SearchPage from "Components/Search-Page";
import "API/data";
import BookDetailsPage from "Components/Book-Details-Page";

class App extends Component {
  render() {
    return (
      <Layout>
        {/* <SearchPage /> */}
        <BookDetailsPage />
      </Layout>
    );
  }
}

export default App;
