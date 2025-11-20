//add import Outlet
import { Outlet } from "react-router";
import Navbar from "./Navbar";

//changed children to Outlet
export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
