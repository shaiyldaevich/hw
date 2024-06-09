import scss from './carusel.module.scss'
const Carusel = () => {
    return (
        <div className={scss.carusel}>
            <div className="container">
                <div className={scss.content}></div>
            </div>
        </div>
    );
};

export default Carusel;