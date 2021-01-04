import React from 'react'
import Styles from './Wrapper.module.scss'

interface IProps {
  children: any;
  injectedClass?: string;
}

const Wrapper:React.FC<IProps> = ({children,injectedClass}:IProps)=>{
  const wrapper_classes = [Styles.wrapper,injectedClass].join(" ")
  return (<div className={wrapper_classes}>{children}</div>);
};

export default Wrapper;