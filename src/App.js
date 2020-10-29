import React from "react";

import Layout from "components/Layout";
import Header from "components/Header";
import Nav from "components/Nav";
import RenderRoutes from "components/RenderRoutes";

import ROUTES from "constants/routes";

function App() {
  return (
    <Layout>
      <Header routes={ROUTES} />
      <Layout.Pages>
        <RenderRoutes routes={ROUTES} />
      </Layout.Pages>
      <Nav />
    </Layout>
  );
}

export default App;
