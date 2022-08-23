// cookies
import Cookies from 'universal-cookie';
// react
import { useState } from "react"
// components
import Modal from "../SectionCredencial/Modals";

const cookies = new Cookies();

function Badges() {
    const [Imgs, setImgs] = useState(cookies.get("insignias"))
    // console.log(Imgs)

    if (Imgs !== undefined) {
        return (
            <section id="badges">
                <h2> Insignias </h2>
                <div className="badge_container_container">
                    {
                        Imgs.map((Img, img_index) => {
                            return <Img_modal Img={Img} key={img_index} />
                        })
                    }
                </div>
            </section>
        )
    }

    return null
}

function Img_modal({ Img }) {
    return (
        <div className="badge_container">
            <img src={Img}></img>
        </div>
    )
}

export default Badges;