import React,{ useState } from "react";
import Styles from './MobileMenu.module.scss'
import {Link as RouteLink} from 'react-router-dom'
interface IProps {
  children: any;
  list:Array<any>;
  onClick?: () => void;
}

const MobileMenu:React.FC<IProps> = ({children,list}:IProps) => {
  const [visiblity,setVisiblity] = useState(false);
  let menuitem;

  const toggleMenu = () => !visiblity?setVisiblity(true):setVisiblity(false)
  
  if(visiblity){
    menuitem = (
      <ul className={Styles.menuContainer}>
        { list.map((item,index) => (
          <RouteLink key={index} to={item.url} style={{color:"#8a8989",textDecoration:"none",display:"flex"}}>
            <li className={Styles.menuItem} key={index}>
              {item.hasOwnProperty("icon")?(<span className={Styles.menuItemIcon}>{item.icon}</span>):''}
              {item.label}
            </li>
          </RouteLink>)
          ) 
        }
      </ul>
    )
  }else{
    menuitem = null;
  }

  return(
    <>
      <div onClick={toggleMenu}>{children}</div>
      {menuitem}
    </>
  );
};
export default MobileMenu;
