import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'
import './Breadcrums.css'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} /> SHOP <img src={arrow_icon} /> {product.category} <img src={arrow_icon} /> {product.name}
    </div>
  )
}

export default Breadcrums
