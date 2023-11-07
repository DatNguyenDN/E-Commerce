import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade"> Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an online platform that facilitaty buying and selling of products or services over the internet. Servers as a virtual marketplace where business and individual commit transactionis without the need for a physical presence.
            </p>
            
            <p>
                E-commerce websites have gained immense popularity due to their convenient accessibility, and the global rach they offer.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
