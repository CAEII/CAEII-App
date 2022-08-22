// cookies
import Cookies from 'universal-cookie';
import { useEffect } from "react"
import { useState } from "react"

const cookies = new Cookies();


function Badges(params) {
    const [Imgs, setImgs] = useState(cookies.get("insignias"))
    
    console.log(Imgs)

    if (Imgs === undefined) {
        return null
    }
    
    return (
        <section id="badges">
            <h2> Insignias </h2>
            <div>
                {/* <insignia_Img Imgs={Imgs}/> */}
                {cookies.get("insignias") ? insignia_Img (Imgs) : null}
            </div>
        </section> 
    )
}


function insignia_Img (Imgs){
    return Imgs.map( Img => {
        return <img src={Img} /* className="exclusive" */></img>
    })
}

export default Badges;