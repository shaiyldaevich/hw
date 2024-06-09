import scss from './headeradmin.module.scss'
const Header = () => {
    return (
        <div className={scss.headeradmin}>
            <div className="container">
                <div className={scss.content}></div>
            </div>
        </div>
    );
};

export default Header;