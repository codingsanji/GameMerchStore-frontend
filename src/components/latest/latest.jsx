import React from 'react'
import './latest.css'
import img from '../assets/heroimg.png'

const Latest = () => {
    return(
        <div className='hero'>
            <div className='left'>
                <h2>FRESH AND FIERCE</h2>
                <div>
                    <p>New 👋 </p>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className='latestbtn'>
                    <div>Latest Collection ➔</div>
                </div>
            </div>

            <div className='right'>
                <img src={img} alt=''/>
            </div>
        </div>
    )
}

export default Latest
