import Carousel from "./Carousel";
//import MaquetteCV from "./MaquetteCV";


const Projets = () => {
    return (
        <div className="contentprojet flex  bg-gradient-to-t from-gray-900 
        via-gray-500 to-white ">
            <h2>Mes Projets</h2>
            <div >
                {/* <MaquetteCV />
                <MaquetteCV />
                <MaquetteCV />
                <MaquetteCV /> */}
                <Carousel />
               
            </div>
        </div>
        
    );
};

export default Projets;