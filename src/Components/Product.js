import React from 'react'

function Product(props) {
  const [show, setShow] = React.useState(true)
  return (
    <div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="item">
        {show && <img className='' src={props.product.img} alt={props.product.title}/>}
         {show === false && <span className='item-text' title={props.product.title}>
            <p>{props.product.title}</p>
            <p>{props.product.price}</p>
          </span>}
    </div>
  )
}

export default Product