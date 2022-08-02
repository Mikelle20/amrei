import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

function Product(props) {
  const [show, setShow] = React.useState(true)
  const { open } = useSelector(store => store.cart)
  return (
    <motion.div id={props.product.id} tabIndex={0} whileHover={{ scale: 1.1 }} onClick={()=> open !== true && props.handleClick(props.product)} onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="item">
        {show && <img id={props.product.title} className='' src={props.product.img} alt={props.product.title}/>}
         {show === false && <span className='item-text' title={props.product.title}>
            <p>{props.product.title}</p>
            <p>${props.product.price.toFixed(2)}</p>
          </span>}
    </motion.div>
  )
}

export default Product