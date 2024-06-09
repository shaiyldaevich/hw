import scss from "./oneproduct.module.scss";
import il1 from "../../../assets/Illustration.png";
import il2 from "../../../assets/Illustration (1).png";
import il3 from "../../../assets/Illustration (2).png";
const divss = [
  {
    name: "More speed. Less spend",
    title: "Keep projects on schedule",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    duis: "✅Duis aute irure dolor in reprehenderit",
    duis2: "✅Excepteur sint occaecat ",
    duis3: "✅Amet consectetur adipiscing elit",
    ilutration: il1,
  },
  {
    name: "More speed. Less spend",
    title: "Keep projects on schedule",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    duis: "✅Duis aute irure dolor in reprehenderit",
    duis2: "✅Excepteur sint occaecat ",
    duis3: "✅Amet consectetur adipiscing elit",
    ilutration: il2,
  },
  {
    name: "More speed. Less spend",
    title: "Keep projects on schedule",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    duis: "✅Duis aute irure dolor in reprehenderit",
    duis2: "✅Excepteur sint occaecat ",
    duis3: "✅Amet consectetur adipiscing elit",
    ilutration: il3,
  },
];
const Oneproduct = () => {
  return (
    <section className={scss.oneproduct}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.reach_goals}>
            <button>Reach goals that matter</button>
          </div>
          <div className={scss.text}>
            <h3>One product, unlimited solutions</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia <br />
              deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>
          <div className={scss.Illustration}>
            {divss.map((el) => (
              <div className={scss.Illustration_div}>
                <div className={scss.div_text}>
                  <h1>{el.name}</h1>
                  <h2>{el.title}</h2>
                  <p>{el.lorem}</p>
                  <div className={scss.duiss}>
                    <a>{el.duis}</a>
                    <a>{el.duis2}</a>
                    <a>{el.duis3}</a>
                  </div>
                </div>
                <img src={el.ilutration} alt="" className={scss.imgil} />
              </div>
            ))}
          </div>
          <div className={scss.line}></div>
        </div>
      </div>
    </section>
  );
};

export default Oneproduct;
