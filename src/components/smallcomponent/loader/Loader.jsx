import React from 'react'
import './Loader.css'
import {  Bars} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
    <Bars
  height="80"
  width="80"
  color="#3d68a4"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    <p>Loading...</p>
  </div>
);
};

export default Loader;
