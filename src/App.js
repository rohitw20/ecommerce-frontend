import "./App.css";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
      </Routes>
    </div>
  );
};

export default App;
