import React from 'react'

function Product(props) {
  return (
    <div className={"item"}>
        <img className='' src={props.product.img} alt={props.product.title}/>
          <span className='item-text' title={props.product.title}>
            <p>{props.product.title}</p>
            <p>{props.product.price}</p>
          </span>
    </div>
  )
}

export default Product