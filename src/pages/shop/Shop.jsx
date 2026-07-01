import React from 'react'
import Banner from '../../components/Banner'
import shop from "../../assets/shop.png"
import ProductCatalog from './ProductCatalog'

function Shop() {
  return (
    <div>
        <Banner
          title="Каталог" 
        backgroundImage={shop}/>
        <ProductCatalog/>
    </div>
  )
}

export default Shop