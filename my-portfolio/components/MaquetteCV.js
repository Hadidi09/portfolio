import Image from 'next/image'
import Maquette from '../public/maquette.png'

const MaquetteCV = () => {
    return (
        <div className=" rounded-3xl flex flex-col border-2 border-red-500 ">
            <Image src={Maquette} alt="livre" className="w-full rounded-3xl" />
            <div className="  bg-gray-500 rounded-3xl pl-5">
                <h3 className="  text-xl w-full ">Découpage d'une maquette</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            
            
        </div>
    );
};

export default MaquetteCV;