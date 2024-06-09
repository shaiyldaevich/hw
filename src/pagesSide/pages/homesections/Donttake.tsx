import scss from "./donttake.module.scss";
import avatar from "../../../assets/Avatar.svg";
const Donttake = () => {
  const ava = [
    {
      avatarka: avatar,
      title:
        "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
      user: "Anastasia Dan",
      job: "UX Board",
    },
    {
      avatarka: avatar,
      title:
        "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
      user: "Anastasia Dan",
      job: "UX Board",
    },
    {
      avatarka: avatar,
      title:
        "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
      user: "Anastasia Dan",
      job: "UX Board",
    },
  ];
  return (
    <section className={scss.donttake}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Don't take our word for it</h1>
            <p>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus <br />
              nulla at volutpat diam ut venenatis tellus—in ornare.
            </p>
          </div>
          <div className={scss.ava_div}>
            {ava.map((el) => (
              <div className={scss.ava_div_block}>
                <img src={el.avatarka} alt="" />
                <p>{el.title}</p>
                <div className={scss.line}></div>
                <h3>
                  {el.user} <span>/{el.job}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donttake;
