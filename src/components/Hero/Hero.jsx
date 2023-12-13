import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
