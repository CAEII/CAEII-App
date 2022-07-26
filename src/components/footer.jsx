// react
import { Link } from 'react-router-dom';
// imgs
import homeIcon from "../styles/home/img/icono-BotonHome.svg"


export default function FooterContent() {
  return (
    <footer>
      {/* <div className="logo">
        <img src="/CAEII-App/imgs/aareii logo chico.png" alt="" />
      </div> */}
      <Link to="/home">
        <div class="homecircle">
          <img src={homeIcon} alt="link al inicio" />
        </div>
      </Link>
    </footer>
  )
}