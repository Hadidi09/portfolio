import Carousel from "./Carousel";
//import MaquetteCV from "./MaquetteCV";
import Image from 'next/image'
import raquette from '../public/test-maquette.png'
import Nature from '../public/nature.jpg';
import Dev from "../public/dev.png";
import CV from "../public/cvtech.png";
import Fade from "react-reveal/Fade";


const Projets = () =>
{
    // const data = [
    //     {"img": raquette,"img": Dev, "img": Nature, "img": CV }
    // ]
    return (
        <div className="contentprojet flex flex-col justify-center pt-6  ">
            <div className="flex justify-center">
                <h2 className=" bg-gray-800 text-white rounded-3xl px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900  ">Mes Projets</h2>
            </div>
            
            <div className="card-maquette grid grid-cols-2" >
                
                <div className="cards-contents bg-gray-400 p-10 m-6 w-max cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
               
                    <div className="content-maquette  " >
                        
                        <Image src={raquette} alt="livre" width={300} height={250} quality={100} className=" rounded-3xl   object-cover " />
                       
                        <div className="flex  p-1 flex-col">
                            <div className="source flex flex-row w-full">
                                <div className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">code source</div>
                                <div className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">lien</div>
                            </div>
                           
                            <div className="w-80 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Officia a veritatis voluptate incidunt cumque optio?</div>
                        </div>
                    </div>
                   
                    
                </div>
                <div className="cards-contents bg-gray-400 p-10 m-6 w-max cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
                    <Fade right>
                        <div className="content-maquette  " >
                   
                        <Image src={Dev} alt="livre" width={300} height={250} quality={100} className=" rounded-3xl   object-cover " />
                    
                        <div className="flex  p-1 flex-col">
                        <div className="source flex flex-row w-full">
                            <div className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">code source</div>
                            <div className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">lien</div>
                        </div>
                        
                        <div className="w-80 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Officia a veritatis voluptate incidunt cumque optio?</div>
                        </div>
                        </div> 
                   </Fade>
                    
              
               
                </div>
                <div className="cards-contents bg-gray-400 p-10 m-6 w-max cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
                    <Fade right>
                        <div className="content-maquette  " >
                   
                            <Image src={Nature} alt="livre" width={300} height={250} quality={100} className=" rounded-3xl   object-cover " />
                        
                            <div className="flex  p-1 flex-col">
                            <div className="source flex flex-row w-full">
                                <div className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">code source</div>
                                <div className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">lien</div>
                            </div>
                            
                            <div className="w-80 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Officia a veritatis voluptate incidunt cumque optio?</div>
                            </div>
                        </div>
                    </Fade>
                   
              
               
                </div>

                {/* <MaquetteCV />
                <MaquetteCV />
                <MaquetteCV />
                <MaquetteCV /> */}
                {/* <Carousel /> */}
               
            </div>
        </div>
        
    );
};

export default Projets;