import React from "react"

const Photos = () => {
  return (
    <div className="container">
      <div className="row">
        <img src={require("../../public/images/photos/IMG_2738.jpg")} className="col-sm-6 col-sm-offset-3" alt="work!" />
        <img src={require("../../public/images/photos/IMG_2758.jpg")} className="col-sm-6 col-sm-offset-3" alt="work!" />
        <img src={require("../../public/images/photos/IMG_2773.jpg")} className="col-sm-6 col-sm-offset-3" alt="work!" />
        <img src={require("../../public/images/photos/IMG_2821.jpg")} className="col-sm-6 col-sm-offset-3" alt="work!" />
        <img src={require("../../public/images/photos/IMG_2866.jpg")} className="col-sm-6 col-sm-offset-3" alt="work!" />
      </div>
    </div>
  )
}

export default Photos
