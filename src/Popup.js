import React from 'react'
import {motion} from 'framer-motion'
export default function Popup({item , close}) {
    
  return (
    <div className="preview" style={{position:'fixed', top:'0', left:'0', zIndex:'2' ,display:'grid', placeContent:'center' , backgroundColor:'hsl(0, 0%, 0% ,0.875)',  height:'100%', width:'100%', transition:'all 2s', pointerEvents: 'auto'}}>
    <div className="preview-content-div" style={{display:'flex',flexDirection:'column', gap:'1rem' , width:'90vw', margin:'auto'}}>
    <button onClick={()=>close(false)}><span style={{fontSize:'1.2rem', textTransform:'uppercase' , color:'#ffff' ,float:'right'}}>close</span></button>
    <motion.img
    initial={{scale:0.1 , opacity:0.1}}
    animate={{scale:1 ,opacity:1}}
    transition={{duration:0.5}}
    alt='artwork'
    src={require(`${item.images.gallery}`)}
    style={{width : "100%" , height:'20rem' , objectFit:'cover' } }/>
    </div>
</div>
  )
}

