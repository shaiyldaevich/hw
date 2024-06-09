import { Outlet } from "react-router-dom";
import scss from "../components/layout/layoutSide.module.scss";
import Header from "./layout/Header/Header";
import Footer from "./layout/footer/Footer";
const LayoutSide = () => {
  return (
    <div className={scss.layoutSide}>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default LayoutSide;
