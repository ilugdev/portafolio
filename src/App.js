import React from "react";

import Layout from "components/Layout";
import Header from "components/Header";
import Nav from "components/Nav";
import RenderRoutes from "components/RenderRoutes";

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Pages>
        <RenderRoutes />
      </Layout.Pages>
      <Nav />
    </Layout>
  );
}

export default App;
