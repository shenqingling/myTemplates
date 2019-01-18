import React from 'react';
import Loadable from "react-loadable";
import Loading from "../Loading";

const LoadableComponent = Loadable({
  loader: () => import("./Users"),
  loading: Loading
});

export default LoadableComponent;