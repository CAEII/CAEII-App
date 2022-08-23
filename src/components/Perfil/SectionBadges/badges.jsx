// cookies
import Cookies from 'universal-cookie';
// react
import { useState } from "react"

const cookies = new Cookies();

function Badges() {
    const [Imgs, setImgs] = useState(cookies.get("insignias"))
    // console.log(Imgs)

    if (Imgs === undefined) {
        return null
    }

    return (
        <section id="badges">
            <h2> Insignias </h2>
            <div>
                {cookies.get("insignias") ? insignia_Img (Imgs) : null}
            </div>
        </section> 
    )
}

function insignia_Img (Imgs){
    return Imgs.map( Img => {
        return <img src={Img}></img>
    })
}

export default Badges;