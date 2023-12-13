import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <Link style={{textDecoration: 'none'}} to='/about'><li>About</li></Link> 
                <Link style={{textDecoration: 'none'}} to='/contact'><li>Contact</li></Link>
            </ul>
            <div className="footer-socials-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
