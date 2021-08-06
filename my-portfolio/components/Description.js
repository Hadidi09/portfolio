import Image from 'next/image'
import developer from "../public/test-maquette.png";

const Description = () => {
    return (
        <div className="  text-white flex justify-center items-center flex-col bg-gradient-to-t from-gray-900 
        via-gray-500 to-white opacity-150 ">
            <div className="flex justify-center items-center flex-col bg-opacity-60 backdrop-filter backdrop-blur-lg">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-t from-gray-500  to-gray-900">Cheikh El Hadramy N'DIAYE</h2>
                <div className=" flex bg-blend-overlay justify-center items-center shadow-xl my-2 ">
                    <p className="  bg-gradient-to-l from-gray-500  via-gray-900 to-gray-500 flex justify-center items-center sm:w-11/12 lg:w-2/4  m-1 p-2 border-0   rounded-3xl  text-justify">
                        J'ai découvert le développement web il y a bientôt un peu plus d'une année.
                        Je cherchais à réaliser et obtenir un diplôme de niveau supérieur, pour une meilleure évolution professionnelle.
                        Suite à des recherches sur le web, j'ai découvert le parcours de développeur web.
                        J'ai commencé à m'y intéresser et à suivre des tutoriels sur différentes plateformes (Openclassrooms, Youtube, Udemy etc ...). À présent,
                        je suis à la recherche d'un emploi en tant développeur Web React et Node.js,
                        suite à ma formation diplômante (bac+2) RNCP Niveau 5.
                    </p>
            
                </div>
            </div>
               
                
           
           
        </div>
       
    );
};

export default Description;