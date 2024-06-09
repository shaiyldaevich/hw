import scss from "./Footer.module.scss";
import twit  from '../../../../assets/Social Icons.svg'
const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.stay_div}>
            <div className={scss.stay_text}>
              <h3>Stay in the loop</h3>
              <p>Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className={scss.stay_inp}>
              <input type="text" placeholder="Your best email…" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className={scss.foot_text}>
            <div className={scss.Lorem}>
              <div className=""></div>
              <p>
                Lorem ipsum is placeholder text commonly <br /> used in the
                graphic, print, and publishing <br />
                industries for previewing layouts and visual <br />
                mockups.
              </p>
            </div>
            <div className={scss.links}>
              <div className={scss.products}>
                <h2>Products</h2>
                <h5>Web Studio</h5>
                <h5>DynamicBox Flex</h5>
                <h5>Programming Forms</h5>
              </div>
              <div className={scss.resources}>
                <h2>Resources</h2>
                <h5>Nostrud exercitation</h5>
                <h5>Visual mockups</h5>
                <h5>Nostrud exercitation</h5>
                <h5>Visual mockups</h5>
                <h5>Nostrud exercitation</h5>
              </div>
              <div className={scss.company}>
                <h2>Company</h2>
                <h5>Consectetur adipiscing</h5>
                <h5>Labore et dolore</h5>
                <h5>Consectetur adipiscing</h5>
                <h5>Labore et dolore</h5>
                <h5>Consectetur adipiscing</h5>
              </div>
            </div>
          </div>
            <div className={scss.made}>
              <h3>
                Made by <span>Cruip</span>. All right reserved
              </h3>
              <img src={twit} alt="twit" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
