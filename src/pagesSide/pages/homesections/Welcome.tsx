import scss from "./Welcome.module.scss";
import video from "../../../assets/Video.png";
const Welcome = () => {
  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <h1 className={scss.title}>Landing template for startups</h1>
            <p className={scss.text}>
              Our landing page template works on all devices, so you only have
              to <br /> set it up once, and get beautiful results forever.
            </p>
            <div className={scss.buttons}>
              <button className={scss.start_free_trial}>
                Start free trial
              </button>
              <button className={scss.learn_more}>Learn more</button>
            </div>
          </div>
          <div className={scss.bottom}>
            <img src={video} alt="vid" />
            <h2>
              The majority our customers do not <br /> understand their
              workflows.
            </h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
