import React from 'react'

const spotifyStyle = {
  border:"none",
  overflow:"hidden"
}

const Landing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 lyrics">
          <img src={require("../../public/images/photos/forethought.jpg")} className="picture-resize" alt="Forethougt EP" /><br />
          Checkout Zack Adams debut EP, <i>Forethought</i> now on the following platforms: <br />
          <a href="https://itunes.apple.com/us/album/forethought-ep/id1103053880?app=itunes"><img src={require("../../public/images/Get_it_on_iTunes_Badge_US_1114.svg")} alt="Get it on iTunes"/></a>
          <a href="https://itunes.apple.com/us/album/forethought-ep/id1103053880?app=music"><img src={require("../../public/images/US_Listen_on_Apple_Music_Badge.svg")} alt="Listen on Apple Music"/></a>
          <iframe src="https://embed.spotify.com/follow/1/?uri=spotify:artist:5jyjga1JavnVapUhte4Nj5&size=basic&theme=light&show-count=0" width="200" height="25" scrolling="no" frameBorder="0" style={spotifyStyle} allowTransparency="true"></iframe>
          <script src="https://cashmusic.org/public/cashmusic.js" data-element="11688"></script>
        </div>
      </div>
    </div>
  )
}

export default Landing
