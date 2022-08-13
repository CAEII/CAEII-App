export default function Navbar({info, setRubro}) {
    if (info.length > 1) {           // reviso si la cantidad de rubros es mayor a uno, si lo es devuelvo el navbar, si no lo es devuelvo un "secions_navbar" con la clase "thin"
        return(
            <div className="sections_navbar">             
                {
                    info.map((rubro, rubroIndex) => {                      // recorros los rubros de la categoria (si los hay) y creo un boton por cada uno
                        return (
                            <NavButton key={rubroIndex} title={rubro.title} setRubro={setRubro}/>
                        ) 
                    })
                }
            </div>
        )
    } else {
        return ( <div className="sections_navbar thin"> </div>  )
    }
}

function NavButton({title,setRubro}){
    // const [Ischecked, setIschecked] = useState(`navbar_radio navbar_radio_${params.index}`);
    const className = "navbutton " + title
    return (
        <div className={className}> 
            {/* <p className="nav_buttons_title"> {title.replace("/", " ")} </p>  */}
            <input type="radio" name="kk" className="navbar_radio" id={title} onClick={() => {setRubro(title)}}/> 
            <span className="checkmark"></span>          
        </div>
    ) 
}