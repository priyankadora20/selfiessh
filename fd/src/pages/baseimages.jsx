import React from 'react'

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

    ]

    return (
      
    <div>

      <div> 
      {dataimg.map(({img}) => {
       return(
      <div>
       <img src={img} alt="img" />
        
      </div>

       )
      })}
 </div>
    </div>
  )
}

export default Baseimages