import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Components/Product'
import { productsData } from '../DummyData/ProductsData'
import { setModal } from '../features/productModalSlice'
import { openCart, purchaseCart } from '../features/cartSlice'
import { AnimatePresence } from 'framer-motion'
import ProductModal from '../Components/ProductModal'

function Products(props) {
  const accessToggled = props.accessColors ? "access-container" : ""
  const [toggle, setToggle] = React.useState(false)
  const dispatch = useDispatch()
  const { open, purchased } = useSelector(store => store.cart)


  const handleClick = (product) => {
    dispatch(setModal(product))
    setToggle(true)
  }

  const handleSubmit = () => {
    setToggle(false)
  }

  const closeCart = () => {
    dispatch(openCart())
    purchased === true && dispatch(purchaseCart(false))
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
    <main onClick={open === true && closeCart} className={`transparent  ${open === true ? 'transparentBlur' : ''}`}>
        <AnimatePresence>{ (toggle && open === false) && <ProductModal handleClick={handleSubmit}/>}</AnimatePresence>
        <div className={"product-container " + accessToggled}>
          {productElements}
        </div>
    </main>
  )
}

export default Products