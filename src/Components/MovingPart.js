import React from 'react'
import { useSpring, animated } from 'react-spring'

function MovingPart(props) {
  const styles = useSpring({
    loop: true,
    to: { x: 300}, 
    from: { x: 0 },
    config: {
        duration: 5000
    }
})

const moving = useSpring({
    to: async (next, cancel) => {
        let coors = [[Math.random() * window.innerWidth, Math.random() * window.innerHeight]]
        
        for (let i = 0; i < coors.length; i++) {
            await next({ x: Math.random() > .5 ? (- coors[i][0]) : coors[i][0], y: Math.random() > .5 ? (- coors[i][1]) : coors[i][1], delay: Math.random() * 2000 , config: { duration: 10000 } })
            // console.log(coors[i])
            coors.push([Math.random() * window.innerWidth, Math.random() * window.innerHeight])
        }
    },
    from: { x: 0, y: 0 }
})
  return (
    <animated.div style={moving}><span className='floater'>{props.symbol}</span></animated.div>
  )
}

export default MovingPart