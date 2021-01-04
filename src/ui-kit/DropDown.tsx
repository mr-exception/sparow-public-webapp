import React,{ useState } from "react";
import Styles from './DropDown.module.scss'
import {Link as RouteLink} from 'react-router-dom'
interface IDropDownProps {
  children: any;
  list:Array<any>;
  onClick?: () => void;
}

const DropDown:React.FC<IDropDownProps> = ({children,list}:IDropDownProps) => {
  const [visiblity,setVisiblity] = useState(false);
  let dropDownContainer;
  let overlay;

  const toggleDropDown = () => {
    if(!visiblity){
      setVisiblity(true)
      console.log("visible")
    }else{
      setVisiblity(false)
      console.log("not visible")
    }
  }

  const handleOutSideClick = () => setVisiblity(false)
  
  if(visiblity){
    dropDownContainer = (
      <ul  className={Styles.dropDownWrapper}>
        { list.map((item,index) => (
          <RouteLink key={index} to={item.url} style={{color:"#8a8989",textDecoration:"none"}}>
            <li className={Styles.dropDownItem} key={index}>
              {item.hasOwnProperty("icon")?(<span className={Styles.dropDownItemIcon}>{item.icon}</span>):''}
              {item.label}
            </li>
          </RouteLink>)
          ) 
        }
      </ul>
    )
    overlay = (<div onClick={handleOutSideClick} className={Styles.overlay}></div>);
  }else{
    dropDownContainer = null;
    overlay = null
  }

  return(
    <>
      {overlay}
      <div style={{position:"relative"}}>
        <div onClick={toggleDropDown}>{children}</div>
        {dropDownContainer}
      </div>
    </>
  );
};
export default DropDown;
