import React,{ useState } from "react";
import { IDropDownProps } from "./props.inteface";
import Styles from './DropDown.module.scss'

const DropDown:React.FC<IDropDownProps> = ({children,list}:IDropDownProps) => {
  const [visiblity,setVisiblity] = useState(false);
  let dropDownContainer;
  if(visiblity){
    dropDownContainer = (
      <ul  className={Styles.dropDownWrapper}>
        { list.map((item,index) => <li className={Styles.dropDownItem} key={index}>{item.label}</li>) }
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
