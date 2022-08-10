import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//placeholders
import PanAmerican from "../styles/sponsors/img/panAmerican.png"
import UM from "../styles/sponsors/img/UM.png"
import UNCUYO from "../styles/sponsors/img/UNCUYO.png"


function Sponsors2() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
      <Carousel swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["superLargeDesktop","desktop","tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px">
        <div >
            <img src={PanAmerican} alt="Pan American Energy"></img>
        </div>
        <div class="item" id="item_2">
            <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
        </div>
        <div class="item" id="item_3">
            <img src={UM} alt="Universidad de Mendoza"></img>
        </div>
        <div class="item" id="item_4">
            <img src={PanAmerican} alt="Pan American Energy"></img>
        </div>
        <div class="item" id="item_5">
            <img src={UNCUYO} alt="universidad nacional de cuyo"></img>
        </div>
      </Carousel>
    )
}

export default Sponsors2