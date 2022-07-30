import React from 'react'
// import { usePalette } from 'react-palette'
import CircleType from 'circletype'
import { motion } from 'framer-motion'
import MovingPart from '../Components/MovingPart'
import { nanoid } from 'nanoid'

function Home() {

  // const { data, loading, error } = usePalette('https://pbs.twimg.com/media/FN6-C7dXwAEyxmR?format=png&name=small')
  // console.log(data, error, loading)


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


  return (
    <div className='homeContainer'>
      <MovingPart />
      {['♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️'].map(move => {
        return <MovingPart key={nanoid()} symbol={move} />
      })}
      <motion.div 
      variants={variants}
      animate='rotate'
      className='shopProducts'
      id='shopProductsLogo'>
        S&#8902;H&#8902;O&#8902;P&#8902;&#8902;P&#8902;R&#8902;O&#8902;D&#8902;U&#8902;C&#8902;T&#8902;S&#8902;&#8902;
      </motion.div>
        <motion.button whileTap={{ scale: 0.7 }} className='enterBtn'><img className='shoppingCart' alt='shopping cart' src={require('../assets/shopping-cart.png')}></img></motion.button>
    </div>
    )
}

export default Home