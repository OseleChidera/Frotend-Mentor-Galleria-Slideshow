import React, { useContext } from 'react'
import '../src/'
import backIMG from "../src/assets/shared/icon-back-button.svg"
import nextIMG from './assets/shared/icon-next-button.svg'
import {Link } from 'react-router-dom'
import { DataContext } from './DataContext'

export default function Player({item , itemArray , indexVal,setIndexVal,next, back}) {
  const {scrollToTop} = useContext(DataContext)
 
return (
          <div className='bottom-player' >
                  <input 
                  className="progressBar" 
                  type="range" 
                  name="range" 
                  min={0} 
                  max={itemArray.length}
                  style={{ width:`${(100/(itemArray.length - 1))*indexVal}%`}}
                  />
              <div className="player" >
                  <div className="text">
                          <span className='piece-name'>{item.name}</span>
                          <span className='artist'>vincent van gogh</span>
                      </div>
                      <div className="player-icons">
                          <Link onClick={scrollToTop} className='link' to={`/${indexVal === 0 ? indexVal : indexVal-1}`}>
                        <button 
                        onClick={()=>back()}
                        disabled={indexVal <= 0 ? true : false}
                        >
                          <img
                          alt='back'
                          src={backIMG}
                          width={25}
                          style={{opacity:`${indexVal <= 0 ? '0.4' : '1'}`}}/>
                          </button>
                          </Link>


                          <Link onClick={scrollToTop} className='link' to={`/${indexVal < itemArray.length-1 ? indexVal+1 : indexVal}`}>
                          <button  
                          onClick={()=>next()}
                          disabled={indexVal === itemArray.length ? true : false}
                          >
                          <img
                          alt='next'
                          src={nextIMG}
                          width={25}
                          style={{opacity:`${indexVal+1  === itemArray.length ? '0.4' : '1'}`}}/>
                          </button>
                          </Link>

                      </div>
              </div>
          </div>
  )
}
