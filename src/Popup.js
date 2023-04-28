import React from 'react'
import './popup.css'
import {motion} from 'framer-motion'
export default function Popup({item , close}) {
    
  return (
    <div className="preview">
    <div className="preview-content-div">
    <span style={{fontSize:'1.2rem', textTransform:'uppercase' , color:'#ffff' ,float:'right'}}><button onClick={()=>close(false)}>close</button></span>
    <motion.img
    initial={{scale:0.1 , opacity:0.1}}
    animate={{scale:1 ,opacity:1}}
    transition={{duration:0.5}}
    alt='artwork'
    src={require(`${item.images.gallery}`)}
   />
    </div>
</div>
  )
}

