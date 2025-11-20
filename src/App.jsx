//add import React Router components
import { Routes, Route } from "react-router";

import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
// Added import ActivityItem
import ActivityItem from "./activities/ActivityItem.jsx";
import Error404 from "./Error404.jsx";
// Added import Layout
import Layout from "./layout/Layout";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */

//modify App to use Routes and Route components
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ActivitiesPage />} />
        <Route path="/activities/:id" element={<ActivityItem />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
