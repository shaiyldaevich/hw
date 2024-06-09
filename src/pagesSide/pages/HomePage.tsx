import Donttake from "./homesections/Donttake";
import Features from "./homesections/Features";
import Oneproduct from "./homesections/Oneproduct";
import Welcome from "./homesections/Welcome";
import Carusel from "./homesections/carusel";

const HomePage = () => {
    return (
        <>
            <Welcome/>
            <Carusel/>
            <Features/>
            <Oneproduct/>
            <Donttake/>
        </>
    );
};

export default HomePage;