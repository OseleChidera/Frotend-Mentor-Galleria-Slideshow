import React, { useContext , useState ,useEffect} from 'react'
import Logo from '../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom';
import { DataContext } from '../DataContext';

export default function Nav() {
  const [slideshowText , setSlideshowText] = useState('start slideshow');
  const [startTimer , setStartTimer] = useState(false)
const {indexVal , setIndexVal} = useContext(DataContext)

      function startSlideshow(){  
      setStartTimer(!startTimer)
      setSlideshowText(slideshowText === 'start slideshow' ? 'stop slideshow':'start slideshow')
      }
      useEffect(()=>{
      let intervalID = null;
      if(startTimer){
        intervalID = setInterval(() => {setIndexVal(prev => prev += 1)}, 3000)
        console.log(indexVal)
      }
      else clearInterval(intervalID)
      
      },[startTimer])


  return (
    <nav>
      <NavLink to="/">
        <div className="logo" >
            <img 
            src={Logo}
            alt='logo'
            className="logo"/>
        </div>
        </NavLink> 
        <NavLink to="/0"><div className='slideshow-starter'
        onClick={()=> startSlideshow()}
        >{slideshowText}</div></NavLink>
    </nav>
  )
}
