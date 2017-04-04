import React from "react"
import { slick } from "slick-carousel"
import { Slider } from "react-slick"
import $ from "jquery"

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4
// };

const Photos = () => {

  // $(document).ready(function(){
  //   $('.responsive').slick({
  //     dots: true,
  //     infinite: false,
  //     speed: 300,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   })
  // })


  // render() {

    return (
      <div>
      <div><img src={require("../../public/images/photos/IMG_2738.jpg")} className="picture-resize" alt="work!" /></div>
      <div><img src={require("../../public/images/photos/IMG_2747.jpg")} className="picture-resize" alt="work!" /></div>
      <div><img src={require("../../public/images/photos/IMG_2758.jpg")} className="picture-resize" alt="work!" /></div>
      <div><img src={require("../../public/images/photos/IMG_2773.jpg")} className="picture-resize" alt="work!" /></div>
      <div><img src={require("../../public/images/photos/IMG_2821.jpg")} className="picture-resize" alt="work!" /></div>
      <div><img src={require("../../public/images/photos/IMG_2866.jpg")} className="picture-resize" alt="work!" /></div>
      </div>
    )
  // }
}


export default Photos
