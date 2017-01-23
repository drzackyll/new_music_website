import React, { Component } from 'react';

class Music extends Component {
  render () {
    function clickHandler() {
      console.log("nothing")
    }
    return (
      <div>
        <iframe className="four columns" onClick={clickHandler} src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A2FZmXJunK6q8gfNWsiBJNe" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
        <p className="eight columns">Lyrics</p>
        <div onClick={console.log("fuck you")}>
          <p>Bless Your Heart <br />
          You’ve got the sun there in your eyes<br />
          It’s only silhouettes you spy<br />
          Oh child bless your heart<br />
          Oh child bless your heart<br /></p>
          <br />
          You lost the thread somewhere I think<br />
          You supposed to pull me from the brink<br />
          Oh child bless your heart<br />
          Oh child bless your heart<br />
          <br />
          Boy it’s getting late<br />
          Time to close the gates<br />
          Run on home<br />
          Skip off like a stone<br />

          You got faith in something well ain’t you sweet<br />
          You bring the dirt in from the street<br />
          Oh child bless your heart<br />
          Oh child bless your heart<br />
          <br />
          This ain’t no place for the faint of heart<br />
          I gave you the script now you play the part<br />
          Oh child bless your heart<br />
          Oh child bless your heart<br />
          <br />
          </div>
          <div>
          Drive On Back To Me<br />
          Get in your car<br />
          And drive on back to me<br />
          Get in your car<br />
          Drive on back to me<br />
          <br />
          The mountain’s high<br />
          The sea is mighty deep<br />
          Get in your car<br />
          Drive on back to me<br />
          <br />
          I’ll crush those mountains into sand<br />
          I’ll melt it into a glass cup<br />
          Use it to scoop the sea up<br />
          All so you can<br />
          <br />
          Get in your car<br />
          And drive on back to me<br />
          Get in your car<br />
          Drive on back to me<br />
          <br />
          Dead Horse Bay<br />
          You can try to bottle it up<br />
          You can try to put a cap on all that junk<br />
          You can try to hide the past<br />
          But the past will come up swinging broken glass<br />
          <br />
          Dead Horse Bay<br />
          You’re gonna throw it all away<br />
          <br />
          The water’s lapping at the shore<br />
          The waves are pulling back the layers even more<br />
          All the bottles and the bones<br />
          All the shipwrecks, now this glue just will not hold<br />
          <br />
          If the sun’s mighty rays<br />
          Are split by glass<br />
          How can I think my feet<br />
          Will have a chance?<br />
          <br />
          I think the tide is coming in<br />
          But this ain’t the kind of place to take a swim<br />
          What’s that pushed here by the wind?<br />
          Another bottle with a message folded in<br />
          <br />
          Forethought<br />
          You just wanted to be loved<br />
          You decided to take what you took from above<br />
          They were blind to what they lacked<br />
          That there’s relief from nights so black<br />
          I know<br />
          <br />
          Your gifts to them have tipped the scales<br />
          An act that must be countervailed<br />
          You give virtue, I’ll give vice<br />
          Every good must have a price<br />
          I know<br />
          <br />
          You taught them to praise a crook<br />
          It was mine, the thing you took<br />
          I’ll teach them to blame the girl<br />
          Unleashed the bad upon the world<br />
          I know<br />
        </div>
      </div>
    )
  }
}

export default Music
