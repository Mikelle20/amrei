import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { decrease, increase } from '../features/cartSlice'

function CartItem (props) {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        const { name } = e.target
        name === 'add' ?  dispatch(increase(props.item.id)): dispatch(decrease(props.item.id))
    }
  return (
    <div className='cartItem'>
        <img className='cartImg' src={props.item.img} alt={props.item.title} />
        <div className='cartTitle'>{props.item.title}</div>
        <div className='cartPrice'>${props.item.price.toFixed(2)}</div>
        <div className='modalCountContainer'>
            <motion.button name='min' onClick={handleClick} whileTap={{ scale: 0.8 }} className='cartModalBtn cartMin'>-</motion.button>
            <div className='cartModalCount' style={{ backgroundColor: '#9EC38D' }}>
                {props.item.amount}
            </div>
            <motion.button name='add' onClick={handleClick} whileTap={{ scale: 0.8 }} className='cartModalBtn cartAdd'>+</motion.button>
        </div>
    </div>
  )
}

export default CartItem
