import React from 'react'
import card from '../imajes/cart.png'
import cart1 from '../imajes/list item.png'
import cart2 from '../imajes/list item (1).png'
import cart3 from '../imajes/list item (2).png'
import cart4 from '../imajes/list item (3).png'
import cart5 from '../imajes/list item (4).png'
import cart6 from '../imajes/list item (5).png'
import '../Stail/PdpCard.css'
function PdpCard() {
  return (
    <section className='PdpCard'>
      <div className="container">
            <div className="Pdp__wrapper reverse">
               <div className="pdp__img">
                <img src={card} alt="" />
               </div>
               <div className="pdp__content ">
                   <h1>Ingredients</h1>
                   <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <div className="pdp__Card">
                      <div className='pdp__card'>
                        <img src={cart1} alt="" />
                        <h3>Hydrating Nectar</h3>
                      </div>
                      <div className='pdp__card' >
                        <img src={cart2} alt="" />
                        <h3>Aloe steam cells</h3>
                      </div>
                      <div className='pdp__card'>
                        <img src={cart3} alt="" />
                        <h3>Seamoss</h3>
                      </div>
                      <div className='pdp__card'>
                        <img src={cart4} alt="" />
                        <h3>Niacinamide</h3>
                      </div>
                      <div className='pdp__card'>
                        <img src={cart5} alt="" />
                        <h3>Almond oil</h3>
                      </div>
                      <div className='pdp__card'>
                        <img src={cart6} alt="" />
                        <h3>Grapeseed oil</h3>
                      </div>
                    </div>
                    <div className="pdp__text">
                      <h4 className='pdp__text4'>Full Ingredient glossary</h4>
                    </div>
               </div>
               
            </div>

      </div>
    </section>
  )
}

export default PdpCard
