import React from 'react'
import ClickToView from './assets/shared/icon-view-image.svg'


export default function Clicktoview({setPopupToggle}) {
  return (
    <div className="view-image" onClick={()=>setPopupToggle(true)}>
        <img
            alt='click-to view'
            src={ClickToView}
            style={{ objectFit:'cover'} }
            className='piece-main-image'/>
            <span className='view-image-span'>VIEW IMAGE</span>
        </div>
  )
}
