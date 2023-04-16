import React from 'react'
import "./baseimages.css"

const Baseimages = () => {
    let dataimg =
    [
         
        {
        id: 1,
        img:`https://picsum.photos/200/300`
        },
        
        {
        id: 2,
        img:`https://picsum.photos/200/300`    
        },
        {
        id: 3,
        img:`https://picsum.photos/200/300`
        },
        {
        id: 4,
        img:`https://picsum.photos/200/300`
        },
        {
        id: 5,
        img:`https://picsum.photos/200/300`
        },
        {
        id: 6,
        img:`https://picsum.photos/200/300`
        },

    ]

    return (
      
    <div>

      <div id="basei"> 
      {dataimg.map(({img}) => {
       return(
      <div id="baseimg">
       <img src={img} alt="img"  id="img"/>
        <img src="https://www.clipartmax.com/png/middle/169-1696957_instagram-icon-instagram-icon-svg-white.png" alt="" id='icon' />
      </div>

       )
      })}
          
      </div>
        
    </div>
  )
}

export default Baseimages