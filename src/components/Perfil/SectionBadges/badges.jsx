import pae from "../../../styles/badges/Insignia_PAE.png"
import paee from "../../../styles/badges/Insignia_paee.png"
import raizen from "../../../styles/badges/insignia_raizen.png"
import invap from "../../../styles/badges/insignia_invap.png"
import flor from "../../../styles/badges/insignia_flor.png"


function Badges(params) {
    

    
    return (<>
        <section id="badges">
            <h2> Insignias </h2>
            <div>
                <img src={raizen} /* className="exclusive" */></img>
                <img src={invap} /* className="premium" */></img>
                <img src={flor} /* className="gold" */></img>
                <img src={paee} /* className="silver" */></img>
                <img src={pae} /* className="bronze" */></img>
                <img src={raizen} /* className="exclusive" */></img>
                <img src={invap} /* className="premium" */></img>
                <img src={flor} /* className="gold" */></img>
                <img src={paee} /* className="silver" */></img>
                <img src={pae} /* className="bronze" */></img>
            </div>
        </section> 
    </>)
}

export default Badges;