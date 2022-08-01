import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import CartItem from './CartItem'
import { clearCart } from '../features/cartSlice'

function Cart () {
    const { cartItems, total, amount } = useSelector(store => store.cart)
    const dispatch = useDispatch()
    const [purchased, setPurchased] = React.useState(false)
    const cartedItems = cartItems.filter(item => item.amount !== 0)
    const cartResults = cartedItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    })

    console.log(cartedItems)
  return (
    <motion.div className='cart'>
        {purchased === true ? 'high' : 
        <> 
            <div className='cartHeader'>YOUR BAG</div>
            {cartResults.length === 0 ? <span className='empty'>EMPTY</span> : cartResults}
            <div className='totalContainer'>
                <span className='cartTotal'>Total Price: ${total.toFixed(2)}</span>
                <span className='cartTotal'>Total Amount: {amount}</span>
            </div>
            <div>
               {cartResults.length !== 0 && <><motion.button whileTap={{ scale: 0.8 }} onClick={() => dispatch(clearCart())} className='clearBtn'>
                        Clear
                      </motion.button>
                      <motion.button whileTap={{ scale: 0.8 }} onClick={() => setPurchased(true)} className='purchaseBtn'>
                            Buy
                        </motion.button></>}
            </div>
        </>}
    </motion.div>
  )
}

export default Cart