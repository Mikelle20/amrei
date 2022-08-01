import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Components/Product'
import { productsData } from '../DummyData/ProductsData'
import { setModal } from '../features/productModalSlice'
import {setToggle } from '../features/productModalSlice'
import { motion, AnimatePresence } from 'framer-motion'
import ProductModal from '../Components/ProductModal'

function Products(props) {
  const accessToggled = props.accessColors ? "access-container" : ""
  const [toggle, setToggle] = React.useState(false)
  const dispatch = useDispatch()
  const { open } = useSelector(store => store.cart)
  // const { product } = useSelector(store => store.productModal)

  const variants = {
    scaleIn: {
      scale: 1.0
    }
  }


  const handleClick = (product) => {
    dispatch(setModal(product))
    setToggle(true)
  }

  const handleSubmit = () => {
    setToggle(false)
  }

  const productElements = productsData.map(product => {
    return <Product
        key = {product.id}
        product = {product}
        id = {product.id}
        img = {product.img}
        navToggled = {props.navToggled}
        handleClick={handleClick}
      />
  })

  return (
    <main className={`transparent  ${toggle || open === true ? 'transparentBlur' : ''}`}>
        <AnimatePresence>{ (toggle && open === false) && <ProductModal handleClick={handleSubmit}/>}</AnimatePresence>
        <div className={"product-container " + accessToggled}>
          {productElements}
        </div>
    </main>
  )
}

export default Products