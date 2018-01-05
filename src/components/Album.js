import React from 'react'

const spotifyStyle = {
  border:"none",
  overflow:"hidden"
}

let Album = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3 lyrics">
          <div class="song-title" style={{textAlign: "center", color: "rgb(172, 133, 117)"}}>
            <h1 class="title" style={{fontFamily: 'Julius Sans One'}}>Down the Line</h1>
            <h3 style={{fontFamily: 'Julius Sans One'}}>coming soon</h3>
          </div>
          <img src={require("../../public/images/photos/IMG_5335.jpg")} id="album-cover" alt="Forethougt EP" /><br />
        </div>
      </div>
      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
      <div id="mc_embed_signup" style={{clear: "left", width: "100%"}}>
        <form action="//zackadamsmusic.us12.list-manage.com/subscribe/post?u=91746c573288b6940df0bcaeb&amp;id=4ce9e393b8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
        	<label style={{color: "rgb(150, 146, 132)"}} htmlFor="mce-EMAIL">Sign up for updates</label>
        	<input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_91746c573288b6940df0bcaeb_4ce9e393b8" tabIndex="-1" value="" /></div>
            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
        </form>
        <div style={{textAlign: "center"}}>
          Checkout Zack Adams debut EP, <i>Forethought</i> now on the following platforms: <br />
          <a href="https://itunes.apple.com/us/album/forethought-ep/id1103053880?app=itunes"><img src={require("../../public/images/Get_it_on_iTunes_Badge_US_1114.svg")} alt=""/></a>
          <a href="https://itunes.apple.com/us/album/forethought-ep/id1103053880?app=music"><img src={require("../../public/images/US_Listen_on_Apple_Music_Badge.svg")} alt=""/></a>
          <iframe src="https://embed.spotify.com/follow/1/?uri=spotify:artist:5jyjga1JavnVapUhte4Nj5&size=basic&theme=light&show-count=0" width="100" height="25" scrolling="no" frameBorder="0" style={spotifyStyle} allowTransparency="true"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Album