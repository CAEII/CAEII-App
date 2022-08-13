// react
import { Link, useLocation } from 'react-router-dom';
// imgs
import homeIcon from "../styles/home/img/icono-BotonHome.svg"


export default function FooterContent() {

  const location = useLocation();

  const footer = (<footer>
      <Link to="/">
        <div className="homecircle">
          <img src={homeIcon} alt="link al inicio" />
        </div>
      </Link>
    </footer>)

  const handleLocation = (location) => {
    
    return location.pathname !== "/" ? footer : ""

  }

  return ( <>
    {handleLocation(location)}
    </>
  )
}