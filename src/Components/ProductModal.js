import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import complementaryColors from 'complementary-colors'
import { addItem } from '../features/cartSlice'

function ProductModal (props) {
    const { product } = useSelector(store => store.productModal)
    const { cartItems } = useSelector(store => store.cart)
    const dispatch = useDispatch()
    const element = document.getElementById(product.id)
    const rect = element.getBoundingClientRect()
    const backgroundColor = element && window.getComputedStyle(element).getPropertyValue("background-color")
    const itemPresent = cartItems.filter(item => item.id === product.id)
    const [count, setCount] = React.useState(itemPresent[0].amount)

    const colorTest = element && new complementaryColors(backgroundColor)
    const complement = element && colorTest.complementary()[1]

    React.useEffect(() => {
        setCount(itemPresent[0].amount)
    },[element])

    const handleClick = (e) => {
        const { name } = e.target
        setCount(prev => {
            return name === 'add' ? prev + 1 : (prev === 0 ? 0 : prev - 1)
        })
    }

    const handleSubmit = (e) => {
        const { name } = e.target
        if (name === 'addToCart') dispatch(addItem({ id: product.id, amount: count }))
        props.handleClick(false)
    }
    const variants = {
        scaleIn: {
          scale: 1.0,
          x: 0,
          y: 0
        }
      }
  return (
    <motion.div
    style={{ backgroundColor: backgroundColor }}
    initial={{
        scale: 0.0,
        x: ((rect.x + (rect.width / 2)) - (window.innerWidth / 2)),
        y: ((rect.y + (rect.height / 2)) - (window.innerHeight / 2))
    }}
    exit={{
        scale: 0.0,
        x: ((rect.x + (rect.width / 2)) - (window.innerWidth / 2)),
        y: ((rect.y + (rect.height / 2)) - (window.innerHeight / 2))
    }}
    variants={variants}
    animate='scaleIn'
    id='modal'
    className='productModal'>
        <img className='modalImg' src={product.img} alt={product.title} />
        <div className='modalTitle'>{product.title}</div>
        <div className='modalPrice'>${product.price.toFixed(2)}</div>
        <div className='modalBtnContainer'>
        <motion.button whileTap={{ scale: 0.8 }} name='closeModal' onClick={handleSubmit} className='addCartBtn'>Close</motion.button>
            <div className='modalCountContainer'>
                <motion.button name='min' onClick={handleClick} whileTap={{ scale: 0.8 }} className='modalBtn min'>-</motion.button>
                <div className='modalCount' style={{ backgroundColor: `rgb(${complement.r}, ${complement.g}, ${complement.b})` }}>
                    {count}
                </div>
                <motion.button name='add' onClick={handleClick} whileTap={{ scale: 0.9 }} className='modalBtn add'>+</motion.button>
            </div>
            <motion.button whileTap={{ scale: 0.8 }} name='addToCart' onClick={handleSubmit} className='addCartBtn'>Add to Cart</motion.button>
        </div>
    </motion.div>
  )
}

export default ProductModal