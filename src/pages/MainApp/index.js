import CreateBlog from "pages/CreateBlog";
import DetailBlog from "pages/DetailBlog";
import React from "react";
import { Home } from "pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "components";
import "./index.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create-blog">
              <CreateBlog />
            </Route>
            <Route path="/detail-blog">
              <DetailBlog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
