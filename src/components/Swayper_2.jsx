import React from 'react'
import "../Stail/Swayper_2.css"
import img_bgbg from "../imajes/portrait-serious-curly-haired-woman-wears-spectacles-sas-has-bad-eyesight-looks-directly-camera-dressed-leather-jacket-poses-against-brown-background-people-facial-expressions-style 1.png"
import img__gbgb from "../imajes/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses 1.png"
function Swayper_2() {
  return (
    <section>
       
            <div className="wrapwrap">
                <div className="canteyner">
                <h1>Collections</h1>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum, Cream Shop</p>
                <div className="Cards__2">
                    <div className="bng_img">
                    <img src={img_bgbg} alt="" />
                    <p>Sed ut perspiciatis</p>
                    </div>
                    <div className="bng_img">
                    <img src={img__gbgb} alt="" />
                    <p>Lorem ipsum dolor</p>
                    </div>
                </div>
                </div>
            </div>
        
    </section>
  )
}

export default Swayper_2