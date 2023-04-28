import React, { useEffect, useState ,useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import {motion} from 'framer-motion'
import {useOutletContext } from 'react-router-dom';
import { DataContext } from './DataContext';
//components
import Popup from './Popup'
import Player from './Player'
import Clicktoview from './Clicktoview'
import ArtistInfo from './ArtistInfo'



export const loaderFunctionPiece = async ({params})=>{
  const fetchUrl = `http://localhost:3000/posts`
  const res = await fetch(fetchUrl ,  {method: "GET", headers: {"Content-type": "application/json;charset=UTF-8"}})
  const data  = await res.json()
  return data;
}


export default function PieceDetails() {


const {next , back ,indexVal , setIndexVal , popupToggle, setPopupToggle , scrollToTop} = useContext(DataContext)
const {id} = useParams();
setIndexVal(Number(id))
const itemList = useLoaderData();

//FINDS WHICH OBJECT IS TO BE USED UPON RENDER
let [item , setItem] = useState(itemList.find(item => item.id === Number(id)));


//CHANGES THE ITEM RENDERED BASED ON THE VALUEN OF THE indexVal variable
 useEffect(() => {
 setItem(itemList.find(item => item.id === indexVal))
}, [indexVal])





  return (
    <>
         {popupToggle && (<Popup popupToggle={popupToggle} item={item} close={setPopupToggle}/>) }
    <div className='piece'>
      <div className="piece-container">
        <motion.div initial={{x:-400}} animate={{x:0}} transition={{duration:0.5 ,type:'ease'}}className='background-image'>
         <Clicktoview setPopupToggle={setPopupToggle}/>
            <img
            alt='artwork'
            src={require(`${item.images.gallery}`)}
            className='main-image'/>
        </motion.div>   
        <ArtistInfo item={item}/>
      </div>
      
        <div className='description-container'>
        <span className='year'>{item.year}</span>
        <div className='top'>
        <p  className='description'>{item.description} </p>
        <span className='go-to-source 'onClick={scrollToTop} ><a href={item.source}>go to source </a></span>
        </div>
        </div>
        </div>
        <Player 
        item={item} 
        itemArray={itemList}
        indexVal={indexVal} 
        setIndexVal={setIndexVal}
        next={next}
        back={back}
        />
    </>
  )
}
















