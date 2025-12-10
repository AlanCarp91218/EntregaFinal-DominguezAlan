import {Header} from "../components/Header/Header"
import { Outlet } from "react-router-dom";

export const MainLayouts = () => {
  return (
    <>
      <Header/>
      <main className="container">
      <h1>Indumentaria deportiva DSPORTS</h1>
        <Outlet />
      </main>
    </>
  );
};