import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

function ProductModal () {
    const { product } = useSelector(store => store.productModal)
    const element = document.getElementById(product.id)
    const rect = element.getBoundingClientRect()
    console.log(rect)
    const variants = {
        scaleIn: {
          scale: 1.0,
          x: 0,
          y: 0
        }
      }
  return (
        <motion.div 
        initial={{ 
            scale: 0.0,
            x: rect.x,
            y: rect.y
        }}
        exit={{ 
            scale: 0.0,
            x: rect.x,
            y: rect.y
        }}
        variants={variants}
        animate='scaleIn'
        className='productModal'>
            {product.title}
        </motion.div>
  )
}

export default ProductModal