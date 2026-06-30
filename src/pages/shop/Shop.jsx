import React from 'react'
import Banner from '../../components/Banner'
import shop from "../../assets/shop.png"

function Shop() {
  return (
    <div>
        <Banner
          title="Каталог" 
        backgroundImage={shop}/>
    </div>
  )
}

export default Shop