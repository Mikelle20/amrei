import React from 'react'
import { useSpring, animated } from 'react-spring'

function Floater (props) {

const moving = useSpring({
    to: async (next, cancel) => {
        let coors = [[(Math.random() * (window.innerWidth -  32)) / 2, (Math.random() * (window.innerHeight - document.getElementById('navbar').offsetHeight)) / 2]]
        
        for (let i = 0; i < coors.length; i++) {
            await next({ x: Math.random() > .5 ? (- coors[i][0]) : coors[i][0], y: Math.random() > .5 ? (- coors[i][1]) : coors[i][1], delay: Math.random() * 2000 , config: { duration: 10000 } })
            // console.log(coors[i])
            coors.push([(Math.random() * (window.innerWidth -  32)) / 2, (Math.random() * (window.innerHeight - document.getElementById('navbar').offsetHeight)) / 2])
        }
    },
    from: { x: 0, y: 0 }
})
  return (
    <animated.div style={moving}><span className='floater'>{props.symbol}</span></animated.div>
  )
}

export default Floater