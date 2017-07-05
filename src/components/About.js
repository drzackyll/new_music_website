import React from 'react'

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 col-sm-offset-2">
          <img style={{width: "100%"}} src={require("../../public/images/photos/thumb_IMG_2622_1024.jpg")} alt="Zack Adams"/>
        </div>
        <div className="lyrics col-sm-4">
          Zack Adams is a songwriter and singer living in Brooklyn, New York. He was
          born in Clinton, New York, and raised in North Carolina and Kentucky. In his
          early years, Adams was encouraged to explore music: first as a piano student,
          then as a choir boy, later as a saxophone player. He fell for rock and roll
          during his adolescence, then taught himself how to play his college roommate's
          guitar. His debut EP, <i>Forethought</i> was released in 2016.
        </div>
      </div>
    </div>
  )
}

export default About
