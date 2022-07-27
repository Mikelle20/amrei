import React from 'react'
import Product from '../Components/Product'
import { productsData } from '../DummyData/ProductsData'

function Products(props) {
  const accessToggled = props.accessColors ? "access-container" : ""
  const productElements = productsData.map(product =>{
    return(
      <Product
        key = {product.id}
        product = {product}
        img = {product.img}
        navToggled = {props.navToggled}
      />
    )
  })

  return (
    <main>
        <div className={"product-container " + accessToggled}>
          {productElements}
        </div>
    </main>
  )
}

export default Products