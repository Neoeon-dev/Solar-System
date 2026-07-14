import Sun from "./Sun";
import Planet from "./Planet";
import Orbit from "./Orbit";
import "./PlanetarySystem.css";
import type React from "react";

interface Props{
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlanetarySystem({setLoading} : Props){

    return(
        <div className="PlanetarySystem">
            <Sun></Sun>
            <Orbit radius={120} angle={0} speed={30} setLoading={setLoading}> 
                <Planet size={30} color="blue" />
            </Orbit>
            <Orbit radius={160} angle={45} speed={15} setLoading={setLoading}> 
                <Planet size={30} color="blue" />
            </Orbit>
            <Orbit radius={200} angle={90} speed={20} setLoading={setLoading}> 
                <Planet size={30} color="blue" />
            </Orbit>
            <Orbit radius={240} angle={135} speed={5} setLoading={setLoading}> 
                <Planet size={30} color="blue" />
            </Orbit>
        </div>
    )
}

export default PlanetarySystem;