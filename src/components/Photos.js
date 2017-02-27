import React from "react"

const Photos = () => {
  return (
    <div>
    <div><img src={require("../../public/images/photos/IMG_2738.jpg")} className="picture-resize" alt="work!" /></div>
    <div><img src={require("../../public/images/photos/IMG_2747.jpg")} className="picture-resize" alt="work!" /></div>
    <div><img src={require("../../public/images/photos/IMG_2758.jpg")} className="picture-resize" alt="work!" /></div>
    <div><img src={require("../../public/images/photos/IMG_2773.jpg")} className="picture-resize" alt="work!" /></div>
    <div><img src={require("../../public/images/photos/IMG_2786.jpg")} className="picture-resize" alt="work!" /></div>
    <div><img src={require("../../public/images/photos/IMG_2821.jpg")} className="picture-resize" alt="work!" /></div>
    <div><img src={require("../../public/images/photos/IMG_2830.jpg")} className="picture-resize" alt="work!" /></div>
    <div><img src={require("../../public/images/photos/IMG_2839.jpg")} className="picture-resize" alt="work!" /></div>
    <div><img src={require("../../public/images/photos/IMG_2866.jpg")} className="picture-resize" alt="work!" /></div>
    </div>
  )
}

export default Photos
