import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import { RouteConstant } from "./constant/RouteConstant";
import Loader from "./components/smallcomponent/loader/Loader";
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <Loader/>
  ) : (
    <Layout>
      <Routes>
        {RouteConstant.map((item) => (
          <Route path={item.path} Component={item.element} key={item.id} />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
