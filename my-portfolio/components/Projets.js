import MaquetteCV from "./MaquetteCV";


const Projets = () => {
    return (
        <div className="contentprojet flex justify-center items-center flex-col bg-gradient-to-t from-gray-900 
        via-gray-500 to-white ">
            <h2>Mes Projets</h2>
            <div className="  md:grid grid-cols-2 gap-2 items-center  p-2">
                <MaquetteCV />
                <MaquetteCV />
                <MaquetteCV />
                <MaquetteCV />
               
           
            </div>
        </div>
        
    );
};

export default Projets;