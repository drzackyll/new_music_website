import React from "react"

const Photos = () => {
  return (
    <div id="myCarousel" className="carousel slide col-sm-8 col-sm-offset-2" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src={require("../../public/images/photos/IMG_2738.jpg")} alt="1" />
        </div>

        <div className="item">
          <img src={require("../../public/images/photos/IMG_2758.jpg")} alt="2" />
        </div>

        <div className="item">
          <img src={require("../../public/images/photos/IMG_2773.jpg")} alt="3" />
        </div>

        <div className="item">
          <img src={require("../../public/images/photos/IMG_2821.jpg")} alt="4" />
        </div>

        <div className="item">
          <img src={require("../../public/images/photos/IMG_2866.jpg")} alt="5" />
        </div>
      </div>

      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Photos
