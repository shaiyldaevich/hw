import scss from "./Features.module.scss";
import icon1 from "../../../assets/Icon.svg";
import icon2 from "../../../assets/Icon (1).svg";
import icon3 from "../../../assets/Icon3.svg";
import icon4 from "../../../assets/Icon 4.svg";
import icon5 from "../../../assets/Icon 5.svg";
import icon6 from "../../../assets/Icon 6.svg";
const box = [
  {
    icon: icon1,
    name: "Instant Features",
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    icon: icon2,
    name: "Instant Features",
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    icon: icon3,
    name: "Instant Features",
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    icon: icon4,
    name: "Instant Features",
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    icon: icon5,
    name: "Instant Features",
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    icon: icon6,
    name: "Instant Features",
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
];
const Features = () => {
  return (
    <section className={scss.Features}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.boxes}>
            {box.map((el) => (
              <div className={scss.box}>
                <img src={el.icon} alt="" />
                <h3>{el.name}</h3>
                <p>{el.title}</p>
              </div>
            ))}
          </div>
          <div className={scss.line}></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
