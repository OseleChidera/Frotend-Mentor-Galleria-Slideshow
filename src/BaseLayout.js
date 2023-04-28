import React, {  useState  } from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom';
import {DataContext} from './DataContext'


export default function BaseLayout() {

  const [popupToggle, setPopupToggle] =useState(false)
  let [indexVal , setIndexVal] = useState(0);
function next(){
setIndexVal(indexVal => indexVal + 1 )
}
function back(){
setIndexVal(indexVal => indexVal - 1)
}
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
  return (
    <DataContext.Provider value={{indexVal , setIndexVal , next , back , popupToggle, setPopupToggle ,scrollToTop}}>
      <div className='dimensions'>
    <Nav/>
    <main id='main'>
      <Outlet context={{popupToggle, setPopupToggle ,indexVal , setIndexVal} }/>
    </main>
    </div>
    </DataContext.Provider>
   )
}
