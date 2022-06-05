import homeIcon from "../styles/home/img/icono-BotonHome.svg"


export default function FooterContent() {
  return (
    <footer>
      <a href="#home">
        <div class="homecircle">
        <img src={homeIcon} alt="link al inicio" />
        </div>
      </a>
    </footer>
  )
}