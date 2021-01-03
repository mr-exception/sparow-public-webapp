import React,{ useState } from "react";
import Styles from './DropDown.module.scss'

interface IDropDownProps {
  children: any;
  list:Array<any>;
  onClick?: () => void;
}

const DropDown:React.FC<IDropDownProps> = ({children,list}:IDropDownProps) => {
  const [visiblity,setVisiblity] = useState(false);
  let dropDownContainer;
  if(visiblity){
    dropDownContainer = (
      <ul  className={Styles.dropDownWrapper}>
        { list.map((item,index) => (
          <li className={Styles.dropDownItem} key={index}>
            {item.hasOwnProperty("icon")?(<span className={Styles.dropDownItemIcon}>{item.icon}</span>):''}
            {item.label}
          </li>)
          ) 
        }
      </ul>
    )
  }else{
    dropDownContainer = null;
  }
  return(
    <div style={{position:"relative"}}>
      <div onClick={()=>setVisiblity(!visiblity)}>{children}</div>
      {dropDownContainer}
    </div>
  );
};
export default DropDown;
