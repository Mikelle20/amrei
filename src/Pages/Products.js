import React from 'react'
import Product from '../Components/Product'
import ProductsData from '../DummyData/ProductsData'

function Products(props) {
  const accessToggled = props.accessColors ? "access-container" : ""
  let productElements = ProductsData.map(product =>{
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