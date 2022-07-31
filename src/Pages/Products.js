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
  const { product } = useSelector(store => store.productModal)

  const variants = {
    scaleIn: {
      scale: 1.0
    }
  }


  const handleClick = (product) => {
    dispatch(setModal(product))
    setToggle(prev => !prev)
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
    <main className='transparent'>
        <AnimatePresence>{ toggle && <ProductModal/>}</AnimatePresence>
        <div className={"product-container " + accessToggled}>
          {productElements}
          <AnimatePresence>
            {/* {toggle && <motion.div initial={{ scale: 0.0 }} exit={{ scale: 0.0 }} variants={variants} animate='scaleIn'>{product.title}</motion.div>} */}
          </AnimatePresence>
        </div>

    </main>
  )
}

export default Products