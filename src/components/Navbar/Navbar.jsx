import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <p>LIBAAS</p>
            </div>
            <div className="toggle-button" onClick={handleMobileMenuToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                <li onClick={() => { setMenu('shop'); handleMobileMenuToggle(); }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
                    {menu === 'shop' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('mens'); handleMobileMenuToggle(); }}>
                    <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
                    {menu === 'mens' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('womens'); handleMobileMenuToggle(); }}>
                    <Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>
                    {menu === 'womens' ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
