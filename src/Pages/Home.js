import React from 'react'
import CircleType from 'circletype'
import { motion } from 'framer-motion'
import Floater from '../Components/Floater'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {

  const navigate = useNavigate()
  const { purchased } = useSelector(store => store.cart)

  const variants = {
    rotate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 40,
        repeatType: 'reverse'
      }
    }
  }

  const [circle, setCircle] = React.useState(null)

  React.useEffect(()=> {
    setCircle(new CircleType(document.getElementById('shopProductsLogo')))
  }, [])

  window.addEventListener('resize', function updateRadius() {
    circle && circle.radius(circle.element.offsetWidth / 2 )
  })

  const floaters = ['♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️'].map(move => {
    return <Floater key={nanoid()} symbol={move} />
  })


  return (
    <div className='homeContainer'>
      {purchased === false ? floaters : ''}
      <motion.div 
      variants={variants}
      animate='rotate'
      className='shopProducts'
      id='shopProductsLogo'>
        S&#8902;H&#8902;O&#8902;P&#8902;&#8902;P&#8902;R&#8902;O&#8902;D&#8902;U&#8902;C&#8902;T&#8902;S&#8902;&#8902;
      </motion.div>
        <motion.button whileTap={{ scale: 0.7 }} onClick={() => navigate('/products')} className='enterBtn'>ENTER</motion.button>
    </div>
    )
}

export default Home