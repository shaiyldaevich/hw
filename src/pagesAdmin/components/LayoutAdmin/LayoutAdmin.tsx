import Header from "./Header/Header";
import Footer from "./footer/Footer";
import scss from "./layoutadmin.module.scss";
import { Outlet } from "react-router-dom";
const LayoutAdmin = () => {
  return (
    <div className={scss.LayoutAdmin}>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
