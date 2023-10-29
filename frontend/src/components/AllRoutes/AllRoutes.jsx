import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Expense from "../../pages/Expense/Expense";
import Income from "../../pages/Income/Income";
import Saving from "../../pages/Saving/Saving";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/income" element={<Income />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/saving" element={<Saving />} />
    </Routes>
  );
};

export default AllRoutes;
