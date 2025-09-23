import "./App.css";

import { useRoutes } from "react-router-dom";

import { router } from "@/app/routes";

const App = () => {
  return useRoutes(router);
};

export default App;
