import scss from "./footerAdmin.module.scss"
const Footer = () => {
    return (
        <footer className={scss.footeradmin}>
            <div className="container">
                <div className={scss.content}></div>
            </div>
        </footer>
    );
};

export default Footer;