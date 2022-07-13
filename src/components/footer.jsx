// react
import { Link } from 'react-router-dom';
// imgs
import homeIcon from "../styles/home/img/icono-BotonHome.svg"


export default function FooterContent() {
  return (
    <footer>
      <Link to="/home">
        <div class="homecircle">
          <img src={homeIcon} alt="link al inicio" />
        </div>
      </Link>
    </footer>
  )
}