import React from 'react'
import Confetti from 'react-confetti'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import CartItem from './CartItem'
import { clearCart, purchaseCart } from '../features/cartSlice'

function Cart () {
    const { cartItems, total, amount, purchased } = useSelector(store => store.cart)
    const dispatch = useDispatch()
    const cartedItems = cartItems.filter(item => item.amount !== 0)
    const cartResults = cartedItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    })

    const handleClick = () => {
        dispatch(purchaseCart(true))
        dispatch(clearCart())
    }

    const variants = {
        scaleIn: {
            scale: 1.0,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }
  return (
    <motion.div initial={{ y: 0, x: 0, scale: 0.0 }} variants={variants} animate='scaleIn' exit={{ y: window.innerHeight, transition: { duration: 0.5 } }} className='cart'>
        {purchased ? <div className='thankYou'>THANK YOU!</div> : <><div className='cartHeader'>YOUR BAG</div>
        {cartResults.length === 0 ? <span className='empty'>EMPTY</span> : cartResults}
        <div className='totalContainer'>
            <span className='cartTotal'>Total Price: ${total.toFixed(2)}</span>
            <span className='cartTotal'>Total Amount: {amount}</span>
        </div>
        <div>
            {cartResults.length !== 0 && <><motion.button whileTap={{ scale: 0.8 }} onClick={() => dispatch(clearCart())} className='clearBtn'>
                    Clear
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.8 }} onClick={handleClick} className='purchaseBtn'>
                        Buy
                    </motion.button></>}
        </div></>}
    </motion.div>
  )
}

export default Cart