import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Layout } from "./pages/dashboard/Layout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Users } from "./pages/dashboard/Users";
import { Documents } from "./pages/dashboard/Documents";
import { Assets } from "./pages/dashboard/Assets/Assets";
import { Projects } from "./pages/dashboard/Projects";
import { Employees } from "./pages/dashboard/Employees";
import { Finance } from "./pages/dashboard/Finance";
import { FarmProjects } from "./pages/dashboard/FarmProjects";
import { CarWash } from "./pages/dashboard/CarWash";
import { Partners } from "./pages/dashboard/Partners";
import { DirtCarriers } from "./pages/dashboard/DirtCarriers";
import { PersonalJournal } from "./pages/dashboard/PersonalJournal";
import { Transactions } from "./pages/dashboard/Transactions";
import { Reports } from "./pages/dashboard/Reports";
import { Login } from "./pages/auth/Login";
import { ResetPassword } from "./pages/auth/ResetPassword";
import { Settings } from "./pages/dashboard/Settings";


function App() {
  return (
    <ErrorBoundary>
      <Routes>
        {/* auth routes here */}
        {/* login */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* dashboard routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="documents" element={<Documents />} />
          <Route path="assets" element={<Assets />} />
          <Route path="projects" element={<Projects />} />
          <Route path="employees" element={<Employees />} />
          <Route path="finance" element={<Finance />} />
          <Route path="farm-projects" element={<FarmProjects />} />
          <Route path="car-wash" element={<CarWash />} />
          <Route path="partners" element={<Partners />} />
          <Route path="dirt-carriers" element={<DirtCarriers />} />
          <Route path="journals" element={<PersonalJournal />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* accessing a page that is not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
